function solution(park, routes) {
    let answer = [];
    let start = [0,0];
    let realpark = [];
    let maxeast = park[0].length-1;
    let maxsouth = park.length-1;
    park.forEach(function(data,index){
        data = data.split("");
        realpark[index] = data;
    });
    for(let i = 0; i<park.length;i++)
    {
        let Sposition = park[i].indexOf("S");
        
        if(Sposition != -1){
            start[1] = Sposition;
            start[0] = i;
            break;
        }
    }

    routes.forEach(function(data){
        let realdata = data.split(" ");
        let position = [];
        position[0] = start[0];
        position[1] = start[1];
        let issafe = true;

        switch(realdata[0])
        {
            case "E":
                while(realdata[1]>0){
                    position[1]++;
                    if(position[1] > maxeast || realpark[position[0]][position[1]] == 'X'){
                        issafe = false;
                        break;
                    }
                    realdata[1]--;
                }
                break;
            case "S":
                while(realdata[1]>0){
                    position[0]++;
                    if(position[0] > maxsouth || realpark[position[0]][position[1]] == 'X'){
                        issafe = false;
                        break;
                    }
                    realdata[1]--;
                }
                break;
            case "W":
                while(realdata[1]>0){
                    position[1]--;
                    if(position[1] < 0 || realpark[position[0]][position[1]] == 'X'){
                        issafe = false;
                        break;
                    }
                    realdata[1]--;
                }
                break;
            case "N":
                while(realdata[1]>0){
                    position[0]--;
                    if(position[0]<0 || realpark[position[0]][position[1]] == 'X'){
                        issafe = false;
                        break;
                    }
                    realdata[1]--;
                }
                break;
        }
        if(issafe === true){
            start = position;
        }
    });
    answer = start;
    return answer;
}