function solution(genres, plays) {
    const genreMap = {};
    const result = [];
  
    // 데이터 정리
    for (let i = 0; i < genres.length; i += 1) {
      // genre[i]의 재생 횟수는 play[i]인 것이 보장
      const genre = genres[i];
      const play = plays[i];
  
      // { 장르 - total, 노래들 정보 }
      // 노래 정보: [고유 번호, 재생 횟수]
  
      if (!genreMap[genre]) {
        genreMap[genre] = { total: 0, songs: [] };
      }
      genreMap[genre].total += play;
      genreMap[genre].songs.push([i, play]);
    }
  
    // 데이터가 준비가 완료되었음!
    const sortedGenres = Object.keys(genreMap).sort(
      (a, b) => genreMap[b].total - genreMap[a].total
    );
  
    for (const genre of sortedGenres) {
      const songs = genreMap[genre].songs;
  
      songs.sort((a, b) => {
        if (a[1] !== b[1]) {
          return b[1] - a[1];
        }
        return a[0] - b[0];
      });
  
      result.push(songs[0][0]);
      if (songs.length > 1) {
        result.push(songs[1][0]);
      }
    }
  
    return result;
  }
  
  const genres = ["classic", "pop", "classic", "classic", "pop"];
  const plays = [500, 600, 150, 800, 2500];
  console.log(solution(genres, plays));