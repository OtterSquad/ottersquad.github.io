// NOTE: Requres a "var news" array in script on the page
function NewsFeed() {
  document.getElementById('newsfeed').innerHTML = "";
  if (news.length > 0) {
    for (x = 0; x < news.length; x += 2) {
      document.getElementById('newsfeed').innerHTML += "<div class=\"innerContent\"><h2>" + news[x] + "</h2><p>" + news[x + 1] + "</p></div><br>";
    }
  }
  else {
    document.getElementById('newsfeed').innerHTML = "<h2>Error: No news!</h2>";
  }
}
