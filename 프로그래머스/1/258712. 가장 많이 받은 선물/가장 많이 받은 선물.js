function solution(friends, gifts) {
    let giftlist = {};
    let giverlist = {};
    let receiverlist = {};
    let answerlist = {};

    friends.forEach(friend => {
        answerlist[friend] = 0;
    });

    gifts.forEach(string => {
        let [giver, receiver] = string.split(" ");

        if (!giftlist[giver]) {
            giftlist[giver] = {};
        }

        giftlist[giver][receiver] = (giftlist[giver][receiver] ?? 0) + 1;
        giverlist[giver] = (giverlist[giver] ?? 0) + 1;
        receiverlist[receiver] = (receiverlist[receiver] ?? 0) + 1;
    });

    for (let i = 0; i < friends.length; i++) {
        for (let j = i + 1; j < friends.length; j++) {
            let A = friends[i];
            let B = friends[j];

            let Agift = (giftlist[A]?.[B] ?? 0);
            let Bgift = (giftlist[B]?.[A] ?? 0);

            if (Agift > Bgift) {
                answerlist[A] += 1;
            } else if (Agift < Bgift) {
                answerlist[B] += 1;
            } else {
                let Ascore = (giverlist[A] ?? 0) - (receiverlist[A] ?? 0);
                let Bscore = (giverlist[B] ?? 0) - (receiverlist[B] ?? 0);

                if (Ascore > Bscore) {
                    answerlist[A] += 1;
                } else if (Ascore < Bscore) {
                    answerlist[B] += 1;
                }
            }
        }
    }

    return Math.max(...Object.values(answerlist));
}