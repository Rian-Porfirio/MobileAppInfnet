import { collection, addDoc, doc, updateDoc, deleteDoc, getDocs } from 'firebase/firestore';
import { auth, db } from "../firebase/databaseKeys";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail
} from "@firebase/auth"
import { launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import database from "@react-native-firebase/database";

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

export const uploadProfileImage = async () => {
    const result = await launchImageLibrary({ mediaType: 'photo' });

    if (result.assets) {
        const imageUri = result.assets[0].uri;
        // @ts-ignore
        const uploadTask = storage().ref(`/profileImages/${Date.now()}`).putFile(imageUri);

        uploadTask.on('state_changed', taskSnapshot => {
            console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
        });

        await uploadTask;
        // @ts-ignore
        const downloadUrl = await uploadTask.snapshot.ref.getDownloadURL();
        console.log('File available at', downloadUrl);
    }
};




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
