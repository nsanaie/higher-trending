
export default class VideoLogic{

    constructor(videos){
        this.videos = videos;
        this.videoCount = 0;
    }
    
    getStartingVideos(){
        let firstThree = [this.videos[0], this.videos[1], this.videos[2]];
        this.videoCount = 3;
        return firstThree;
    }

    getNextVideo(){
        let nextVideo = this.videos[this.videoCount];
        this.videoCount++;
        return nextVideo;
    }
}