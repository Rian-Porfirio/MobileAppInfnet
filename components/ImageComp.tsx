import { launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';

const uploadProfileImage = async () => {
    const result = await launchImageLibrary({ mediaType: 'photo' });

    if (result.assets) {
        const imageUri = result.assets[0].uri;
        const uploadTask = storage().ref(`/profileImages/${Date.now()}`).putFile(imageUri);

        uploadTask.on('state_changed', taskSnapshot => {
            console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
        });

        await uploadTask;
        const downloadUrl = await uploadTask.snapshot.ref.getDownloadURL();
        console.log('File available at', downloadUrl);
    }
};