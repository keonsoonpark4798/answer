function solution(wallpaper) {
    var answer = [50,50,0,0];
    
    wallpaper.forEach(function(arr,index){
        let position = arr.indexOf("#");
        let lastposition = arr.lastIndexOf("#");
        if(position>=0){
            if(answer[0] > index){
                answer[0] = index;
            }
            if(answer[1] > position){
                answer[1] = position;
            }
        }
        
        if(lastposition>=0){
            if(answer[2] < index+1){
                answer[2] = index+1;
            }
            if(answer[3] < lastposition+1){
                answer[3] = lastposition+1;
            }
        }
    });
    
    return answer;
}