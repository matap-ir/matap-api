import uuidv4 from 'uuid/v4';

const generateUUID = () => {
    return uuidv4();
};

const dayNumberToString = (day) => {
    switch (day) {
        case '0':
            return 'یکشنبه';
        case '1':
            return 'دوشنبه';
        case '2':
            return 'سه شنبه';
        case '3':
            return 'چهارشنبه';
        case '4':
            return 'پنجشنبه';
        case '5':
            return 'جمعه';
        case '6':
            return 'شنبه';
    }
};

export default {
    generateUUID,
    dayNumberToString
};
