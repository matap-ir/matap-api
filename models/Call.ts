interface Call{
    id?: string,
    type: 'video/audio' | 'audio',
    state: 'initiating' | 'transmitting' | 'ended',
    initiateTime: number,
    from: {id:string,url?:string},
    to: {id:string,url?:string},
}

export default Call;
