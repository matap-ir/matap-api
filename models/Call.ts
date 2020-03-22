interface Call{
    id?: string,
    type: 'video/audio' | 'audio',
    from: {id:string,url?:string},
    to: {id:string,url?:string},
}

export default Call;
