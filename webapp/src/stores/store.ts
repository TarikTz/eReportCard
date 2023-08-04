import { defineStore } from "pinia";
import axios from "axios";

export const useStore = defineStore({
  //
  id: "appStore",
  state: () => ({
    apiKey: import.meta.env.VITE_API_KEY,
    api: "https://vault.immudb.io/ics/api/v1/",
    students: [] as any[],
  }),

  actions: {
    async listUsers() {
      await axios
        .post(
          this.api + "ledger/default/collection/default/documents/search",
          {
            page: 1,
            perPage: 100,
          },
          {
            headers: {
              "X-API-Key": this.apiKey,
              accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          this.students = response.data.revisions.map(
            (rev: any) => rev.document
          );
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async addGrade() {
      console.log(this.apiKey);
      await axios
        .put(
          this.api + "ledger/default/collection/default/document",
          {
            document: {
              name: "John Doe",
              id: 1,
              timestamp: "2023-05-10T12:00:00Z",
              email: "johndoe@example.com",
              age: 30,
              address: "123 Main Street",
              city: "New York",
              country: "USA",
              phone: "+1-123-456-7890",
              is_active: true,
            },
          },
          {
            headers: {
              accept: "application/json",
              "X-API-Key": this.apiKey,
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
