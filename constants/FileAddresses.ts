// const base_path = 'D:/LifeMate/';
const base_path = 'businesses/';
const img_type = 'jpg';

const chats = {
    folder_chat: (roomId: string) => base_path + 'chats/' + roomId + '/'
};

const folder_medical_services = () => base_path + 'medical_services/';


export default {
    chats,
    folder_medical_services
};
