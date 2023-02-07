// import { Circle, CircleEnvironments, SubscriptionRequest } from "@circle-fin/circle-sdk";

// async function circleAPI(){
//   const circle = new Circle(
//     'QVBJX0tFWTo0YTU5NTNiNjFjMjM4YTFhY2I4MTA2ZDBlZWM3NTgxNDowN2E5OGE4N2M5OWJiN2MxMjI4YjQwZDhhZTI2OWM3Nw==',
//     CircleEnvironments.sandbox
// )
// console.log("Circle: ", circle)
// return circle
// }
// export async function createCheckoutSession() {
//   const circle = await circleAPI()
//     const createCheckoutSessionRes =
//       await circle.checkoutSessions.createCheckoutSession(
//         {
//           successUrl: "https://www.example.com/success",
//           amount: {
//             amount: "3.14",
//             currency: "USD",
//           },
//         }
//       );

//     console.log({createCheckoutSessionRes})
//     return createCheckoutSessionRes
//    }
