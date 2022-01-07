import { ChatType } from '../Enums';
export declare class FileMetaData {
    fileType: ChatType;
    width?: number;
    height?: number;
    orientation?: number;
    duration?: number;
    roomId?: string;
}
export default class FileInfo {
    _id: string;
    length: number;
    chunkSize: number;
    uploadDate: string;
    filename: string;
    md5: string;
    contentType: string;
    metadata: FileMetaData;
    oldUrl?: string;
    url: string;
    uploader: string;
}
