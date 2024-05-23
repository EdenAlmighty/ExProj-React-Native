// import { Account, Avatars, Client, Databases, ID, Query, Storage, } from 'react-native-appwrite';

// export const config = {
//     endpoint: 'https://cloud.appwrite.io/v1',
//     platform: 'com.jsm.aoracc',
//     projectId: '6644e5970020a54ba8a9',
//     databaseId: '6644e69f002a1f8ccc8d',
//     userCollectionId: '6644e6b30005b62472c3',
//     videoCollectionId: '6644e6cf0000b99dae88',
//     storageId: '6644e7e40017a4bdc28c',
// };

// const { endpoint, platform, projectId, databaseId, userCollectionId, videoCollectionId, storageId } = config

// const client = new Client();
// client
//     .setEndpoint(endpoint)
//     .setProject(projectId)
//     .setPlatform(platform);

// const account = new Account(client);
// const avatars = new Avatars(client);
// const databases = new Databases(client);

// export async function login(email, password) {
//     try {
//         const session = await account.createEmailSession(email, password);
//         console.log('session: ', session)
//         return session;
//     } catch (err) {
//         if (err.response && err.response.message) {
//             throw new Error(err.response.message);
//         } else {
//             throw new Error(err.message);
//         }
//     }
// }

// export async function register(email, password, username) {
//     try {
//         const newAccount = await account.create(ID.unique(), email, password, username);

//         if (!newAccount) throw new Error("Account creation failed");

//         const avatarUrl = avatars.getInitials(username);

//         await login(email, password);

//         const newUser = await databases.createDocument(
//             databaseId,
//             userCollectionId,
//             ID.unique(),
//             {
//                 accountId: newAccount.$id,
//                 email,
//                 username,
//                 avatar: avatarUrl,
//             }
//         );
//         return newUser;
//     } catch (err) {
//         if (err.response && err.response.message) {
//             throw new Error(err.response.message);
//         } else {
//             throw new Error(err.message);
//         }
//     }
// }

// export async function getCurrentUser() {
//     try {
//         const currAccount = await account.get();
//         console.log('currAccount: ', currAccount);

//         if (!currAccount) {
//             throw new Error('No current account found');
//         }

//         const currUser = await databases.listDocuments(
//             databaseId,
//             userCollectionId,
//             [Query.equal('accountId', currAccount.$id)]
//         );

//         if (!currUser.documents || currUser.documents.length === 0) {
//             throw new Error('No user found with the current account ID');
//         }

//         return currUser.documents[0];
//     } catch (err) {
//         console.error('Error fetching current user: ', err);
//         throw new Error(err.message || 'Unknown error occurred while fetching current user');
//     }
// }


// export async function getAllPosts() {
//     try {
//         const posts = await databases.listDocuments(
//             databaseId,
//             videoCollectionId
//         )
//         console.log('posts😍: ', posts.documents)
//         return posts.documents
//     } catch (err) {
//         throw new Error(err)
//     }
// }

// // // Sign Out
// // export async function signOut() {
// //     try {
// //       const session = await account.deleteSession("current");
  
// //       return session;
// //     } catch (error) {
// //       throw new Error(error);
// //     }
// //   }
  