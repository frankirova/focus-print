import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase-config";

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    const prodRef = query(collection(db, "products"), orderBy("price", "asc"));

    getDocs(prodRef)
      .then((response) => {
        const prodAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        resolve(prodAdapted);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};

export const getContactDates = () => {
  return new Promise((resolve, reject) => {
    const ContactDateRef = collection(db, "contactDate");
    getDocs(ContactDateRef)
      .then((response) => {
        const ContactDateAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        resolve(ContactDateAdapted);
      })
      .catch((error) => {
        reject(error);
      });
  }, []);
};

// export const getNavDates = () => {
//   return new Promise((resolve, reject) => {
//     const navDateRef = collection(db, "navDate");
//     getDocs(navDateRef)
//       .then((response) => {
//         const navDateAdapted = response.docs.map((doc) => {
//           const data = doc.data();
//           return {...data};
//         });
//         const datita = Array.from(navDateAdapted);
//         resolve(datita);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// };
// export const getNavDates = () => {
//   return new Promise((resolve, reject) => {
//     const navDateRef = collection(db, "navDate");
//     getDocs(navDateRef)
//       .then((response) => {
//         const navDateAdapted = response.docs.map((doc) => {
//           const data = doc.data();
//           // return { ...data };
//           const stringData = JSON.stringify(data);
//           return { ...JSON.parse(stringData) };
//         });
//         resolve(navDateAdapted);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// };
