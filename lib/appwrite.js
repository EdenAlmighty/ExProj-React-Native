import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.jsm.aoracc',
    projectId: '6644e5970020a54ba8a9',
    databaseId: '6644e69f002a1f8ccc8d',
    userCollectionId: '6644e6b30005b62472c3',
    videoCollectionId: '6644e6cf0000b99dae88',
    storageId: '6644e7e40017a4bdc28c',
};

const { endpoint, platform, projectId, databaseId, userCollectionId, videoCollectionId, storageId } = config

const client = new Client();
client
    .setEndpoint(config.endpoint)
    .setProject(config.projectId)
    .setPlatform(config.platform);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export async function login(email, password) {
    try {
        const session = await account.createEmailPasswordSession(email, password);
        return session;
    } catch (err) {
        if (err.response && err.response.message) {
            throw new Error(err.response.message);
        } else {
            throw new Error(err.message);
        }
    }
}

export async function register(email, password, username) {
    try {
        const newAccount = await account.create(ID.unique(), email, password, username);

        if (!newAccount) throw new Error("Account creation failed");

        const avatarUrl = avatars.getInitials(username);

        await login(email, password);

        const newUser = await databases.createDocument(
            databaseId,
            userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl,
            }
        );
        return newUser;
    } catch (err) {
        if (err.response && err.response.message) {
            throw new Error(err.response.message);
        } else {
            throw new Error(err.message);
        }
    }
}

export async function getCurrentUser() {
    try {
        const currAccount = await account.get()

        if (!currAccount) throw Error

        const currUser = await databases.listDocuments(
            databaseId,
            userCollectionId,
            [Query.equal('accountId', currAccount.$id)]
        )

        if (!currUser) throw Error

        return currUser.documents[0]

    } catch (err) {
        console.log('err: ', err)
    }
}