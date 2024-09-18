import {collection, addDoc, getDoc, doc, updateDoc, deleteDoc, getDocs, onSnapshot} from 'firebase/firestore';
import { auth, db } from "../firebase/databaseKeys";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail
} from "@firebase/auth"
import storage from '@react-native-firebase/storage';

export async function loginAuth(email: string, password: string){
   await signInWithEmailAndPassword(auth, email, password)
        .then((credencials) => {
            const user = credencials.user;
            alert(`${user.email} logado com sucesso`);
        })
       .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`Error. 
Code: ${errorCode} 
says:
${errorMessage}`)
        });
}

export async function createAccountAuth(email: string, password: string){
    await createUserWithEmailAndPassword(auth, email, password)
        .then((credencials) =>{
            const user = credencials.user;
            alert(`${user.email} cadastrado com sucesso`);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`Error. 
Code: ${errorCode} 
says:
${errorMessage}`)
        });
}

export async function changePassword(email: string){
    await sendPasswordResetEmail(auth, email)
        .then(()=> alert("email enviado"))
        .catch((erro)=> alert(`error ${erro.code} says ${erro.message}`))
}

export const addItemToList = async (item) => {
    try {
        await addDoc(collection(db, 'items'), {
            name: item.name,
            quantity: item.quantity,
        });
        console.log('Item adicionado com sucesso!');
    } catch (error) {
        console.error('Erro ao adicionar item:', error);
    }
};

export const editItem = async (itemId, newItemData) => {
    try {
        const itemRef = doc(db, 'items', itemId);
        await updateDoc(itemRef, newItemData);
        console.log('Item atualizado com sucesso!');
    } catch (error) {
        console.error('Erro ao atualizar item:', error);
    }
};

export const deleteItem = async (itemId) => {
    try {
        const itemRef = doc(db, 'items', itemId);
        await deleteDoc(itemRef);
        console.log('Item deletado com sucesso!');
    } catch (error) {
        console.error('Erro ao deletar item:', error);
    }
};

export const getAllItems = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, 'items'));
        const itemList = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        return itemList;
    } catch (error) {
        console.error('Erro ao buscar itens:', error);
        return [];
    }
};

export const fetchProfile = async () => {
    try {
        const profileDoc = await getDoc(doc(db, 'perfil', "eXQsJwBtZWFzeO6ZCebQ"));
        if (profileDoc.exists()) {
            return profileDoc.data();
        } else {
            console.log('Nenhum perfil encontrado.');
            return null;
        }
    } catch (error) {
        console.error('Erro ao buscar perfil:', error);
        return null;
    }
};

export const handleSave = async ( name, occupation, photo) => {
    if (name && occupation) {
        try {
            await updateDoc(doc(db, 'perfil', "eXQsJwBtZWFzeO6ZCebQ"), {
                nome: name,
                ocupacao: occupation,
                foto: photo,
            });
            console.log('Perfil atualizado com sucesso!');
            return true;
        } catch (error) {
            console.error('Erro ao atualizar perfil:', error);
            return false;
        }
    } else {
        console.error('Preencha todos os campos.');
        return false;
    }
};

export const subscribeToProfile = (callback) => {
    const profileDoc = doc(db, 'perfil', "eXQsJwBtZWFzeO6ZCebQ");

    return onSnapshot(profileDoc, (docSnap) => {
        if (docSnap.exists()) {
            callback(docSnap.data());
        } else {
            console.log('No such document!');
            callback(null);
        }
    }, (error) => {
        console.error('Error fetching profile:', error);
        callback(null);
    });
};

const uploadImage = async (uri: string) => {
    const imageName = uri.substring(uri.lastIndexOf('/') + 1);
    const ref = storage().ref(`images/${imageName}`);
    await ref.putFile(uri);
    return ref.getDownloadURL();
};