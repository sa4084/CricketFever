from flask import Flask
from flask import redirect, url_for, render_template, request
from flask import render_template, make_response
from flask import Response, request, jsonify
from itsdangerous import json
app = Flask(__name__)

id = 11
current_id = 11
data = {
 "1": {
 "id": "1",
 "ranking": "2", 
 "name": "Virat Kohli",
 "image": "https://img1.hscicdn.com/image/upload/f_auto,t_gn_f_345/lsci/db/PICTURES/CMS/316600/316605.png",
 "summary": "Virat Kohli is an Indian international cricketer and former captain of the Indian national team. He plays for Delhi in domestic cricket and Royal Challengers Bangalore in the Indian Premier League as a right-handed batsman. Kohli became the most consistent all-format accumulator of his time, making jaw-dropping chases look easy, and finding, in his own words, the safest possible way to score runs. Plenty of them.",
 "year": "2008",
 "teams": ["Royal Challengers Bangalore"],
 "affiliations": ["Nike", "Puma", "Audi", "Educative.io"],
 "Otherteammates": ["Rohit Sharma", "MS Dhoni", "Sachin", "Jadeja"],
 "runs": "12311",
 },
 "2": {
 "id": "2",
 "ranking": "5",
 "name": "KL Rahul",
 "image": "https://img1.hscicdn.com/image/upload/f_auto,t_gn_f_345/lsci/db/PICTURES/CMS/319900/319942.png",
 "summary": "A tall, elegant right-hand batsman who can keep wicket in a crisis, KL Rahul is among the most highly rated opening batsmen in India's next generation. Rahul was a part of India's squad in the 2010 Under-19 World Cup and made his first-class debut later that year. Having taken a while to establish himself as a first-class cricketer, he enjoyed a breakthrough 2013-14 season, laying the foundation for Karnataka's Ranji Trophy victory with 1033 runs, which included three centuries, three nineties, and a Man-of-the-Match performance in the final.",
 "year": "2016",
 "affiliations": ["Reebok", "Puma", "shaadi.com", "Educative.io"],
 "teams": ["Kings XI Punjab"],
 "Otherteammates": ["Rohit Sharma", "Steven Smith", "Sachin", "Jadeja"],
 "runs": "1634",
 },
  "3": {
 "id": "3",
 "ranking": "8",
 "name": "Rahul Dravid",
 "image": "https://img1.hscicdn.com/image/upload/f_auto,t_gn_f_345/lsci/db/PICTURES/CMS/319900/319948.png",
 "summary": "Rahul Dravid was probably one of the last classical Test match batsmen. His progress into the national side may have been steady and methodical rather than meteoric, but once there, Dravid established himself at the vanguard of a new, defiant generation that were no longer easybeats away from home. Armed with an orthodox technique drilled into him by Keki Tarapore, he became the cement that held the foundations firm while the flair players expressed themselves. Yet, for a man quickly stereotyped as one-paced and one-dimensional, he too could stroke the ball around when the mood struck him.",
 "year": "1996",
 "affiliations": ["Vicks", "Ruba", "Fiol", "Educative.io"],
 "teams": ["India", "Royal Challengers Bangalore", "Rajasthan Royals", "India U19"],
 "Otherteammates": ["Rohit Sharma", "MS Dhoni", "Sachin", "Jadeja"],
 "runs": "10889",
 },
  "4": {
 "id": "4",
 "ranking": "1",
 "name": "Ravindra Jadeja",
 "image": "https://img1.hscicdn.com/image/upload/f_auto,t_gn_f_345/lsci/db/PICTURES/CMS/316600/316600.png",
 "summary": "First they ignore you, then they laugh at you, then they fight you, then you win. A fellow Gujarati, Mahatma Gandhi, could well have meant to say this about Ravindra Jadeja. The best of observers ignored his left-arm spin at first, then he was ridiculed for his three triple-centuries in Ranji Trophy, the idea of Jadeja the Test player was contested when India handed him a debut in 2012-13 against conventional wisdom, but Jadeja won them all over with over after over of unerring accuracy, and sits among the elite of Indian spin bowling now.",
 "year": "2009",
 "affiliations": ["Nike", "Vicks", "Audi", "Chait"],
 "Otherteammates": ["Rohit Sharma", "MS Dhoni", "Sachin", "Jadeja"],
 "teams": ["India", "Chennai SuperKings", "Royals Kings"],
 "runs": "2411",
 },
  "5": {
 "id": "5",
 "ranking": "12", 
 "name": "Steve Smith",
 "image": "https://img1.hscicdn.com/image/upload/f_auto,t_gn_f_345/lsci/db/PICTURES/CMS/316600/316609.png",
 "summary": "Steven Peter Devereux Smith is an Australian international cricketer and the current vice-captain of the Australia national cricket team in Tests. He was the former captain of the Australian national team. It has been career of incredible twists and turns. Steven Smith was a legspinner who has become Australia's best batter since Sir Donald Bradman either side of having his career derailed by the Newlands ball-tampering scandal which saw him stripped of the captaincy and banned for 12 months.",
 "year": "2010",
 "affiliations": ["Pampers", "Puma", "Audi", "Rickoto"],
 "teams": ["Australia", "Rajasthan Royals", "Big Bash"],
 "Otherteammates": ["Rohit Sharma", "MS Dhoni", "Sachin", "Jadeja"],
 "runs": "4378",
 },
  "6": {
 "id": "6",
 "ranking": "22", 
 "name": "Rohit Sharma",
 "image": "https://img1.hscicdn.com/image/upload/f_auto,t_gn_f_345/lsci/db/PICTURES/CMS/316500/316584.png",
 "summary": "Rohit Gurunath Sharma is an Indian international cricketer who is the current captain of the Indian national team. A right-handed opening batsman and an occasional right-arm off break bowler, he plays for Mumbai in domestic cricket.Sharma currently holds the world record for the highest individual score (264) in a one-day international match and is the only player to have scored three double-centuries in one-day internationals. He won the ICC Men's ODI Cricketer of the Year award in 2019 after he scored five centuries in the 2019 World Cup tournament. Sharma has received two national honours, the Arjuna Award in 2015 and the prestigious Major Dhyan Chand Khel Ratna in 2020. Outside cricket, Sharma is an active supporter of animal welfare campaigns. He is the official Rhino Ambassador for WWF-India and is a member of People for the Ethical Treatment of Animals (PETA). He has worked with PETA in its campaign to raise awareness of the plight of homeless cats and dogs in India.",
 "year": "2007",
 "affiliations": ["Nike", "Pampers", "Vishan", "Educative.io"],
 "teams": ["India", "Deccan Chargers", "Mumbai Indians", "India U19"],
 "Otherteammates": ["Rohit Sharma", "MS Dhoni", "Sachin", "Jadeja"],
 "runs": "9283",
 },
  "7": {
 "id": "7",
 "ranking": "28", 
 "name": "Mahendra Singh Dhoni",
 "image": "https://img1.hscicdn.com/image/upload/f_auto,t_gn_f_345/lsci/db/PICTURES/CMS/319900/319946.png",
 "summary": "Mahendra Singh Dhoni (born 7 July 1981), was a former international cricketer who plays as a wicketkeeper and a right-handed middle order batsman. His power hitting ability made his reputation as a finisher. He is widely considered as one of the greatest white ball cricket captain ever [1] .He captained the Indian national cricket team in limited-overs formats from 2007 to 2017 and in Test cricket from 2008 to 2014. He led the team to three ICC titles (2007 ICC World Twenty20, 2011 ICC Cricket World Cup and 2013 ICC Champions Trophy) and brought the Indian cricket team to number one position in ICC test rankings in 2009.[3][4] He is current captain of Chennai super king in IPL. He also led CSK to win the 2010, 2011, 2018 and 2021 editions of IPL.",
 "year": "2005",
 "affiliations": ["Ambuja", "Puma", "Celemnt", "Educative.io"],
 "Otherteammates": ["Rohit Sharma", "MS Dhoni", "Sachin", "Jadeja"],
 "teams": ["India", "Chennai Super Kings", "India U19"],
 "runs": "10773",
 },
  "8": {
 "id": "8",
 "ranking": "33",
 "name": "Kane Williamson",
 "image": "https://img1.hscicdn.com/image/upload/f_auto,t_gn_f_345/lsci/db/PICTURES/CMS/316600/316618.png",
 "summary": "By the time Kane Williamson is finished with playing cricket, it is probable that he will be New Zealand's greatest batsman. Even Martin Crowe endorsed that view. But he may also finish as one of the game's most loved global figures. Williamson is ambidextrous, bats right-handed in the top order across formats, and has become a pillar of the New Zealand side since he made his debut in 2010. Williamson was born into a sporting family in Tauranga, the largest city in New Zealand's Bay of Plenty region. His father had played Under-17 cricket for Northern Districts, his mother was a representative basketball player, and his sisters played volleyball at age-group level. Williamson took to cricket and it grew beyond a hobby quite quickly.",
 "year": "2010",
 "affiliations": ["Vicks", "Puma", "Pampers", "Educative.io"],
 "teams": ["New Zealand", "Kings XI Punjab", "New Zealand U19"],
 "Otherteammates": ["Rohit Sharma", "MS Dhoni", "Sachin", "Jadeja"],
 "runs": "6173",
 },
  "9": {
 "id": "9",
 "ranking": "9",
 "name": "Virender Sehwag",
 "image": "https://img1.hscicdn.com/image/upload/f_auto,t_gn_f_345/lsci/db/PICTURES/CMS/316400/316486.png",
 "summary": "Virender Sehwag audio speaker iconpronunciation (help·info) (born 20 October 1978) is a former Indian cricketer. Widely regarded as one of the most destructive batsmen of all time, Sehwag played as an aggressive right-handed opening batsman and also bowled part-time right-arm off-spin. He played his first One Day International in 1999 and joined the Indian test side in 2001.[2] In April 2009, Sehwag became the first Indian to be honoured as the Wisden Leading Cricketer in the World for his performance in 2008,[3] subsequently becoming the first player of any nationality to retain the award for 2009.[4] He is the former Occasional captain of India, former Vice-Captain of India, former captain of Delhi Daredevils and former captain of Delhi Ranji Team.",
 "year": "2001",
 "affiliations": ["Reebok", "Puma", "Pishpa", "Chintu"],
 "Otherteammates": ["Steve Rogers", "MS Dhoni", "Sachin", "Jadeja"],
 "teams": ["India", "Delhi Daredevils", "Punjab Kings"],
 "runs": "8273",
 },
  "10": {
 "id": "10",
 "ranking": "10",
 "name": "Sachin Ramesh Tendulkar",
 "image": "https://img1.hscicdn.com/image/upload/f_auto,t_gn_f_345/lsci/db/PICTURES/CMS/316400/316486.png",
 "summary": "Sachin Ramesh Tendulkar born 24 April 1973) is an Indian former international cricketer who captained the Indian national team. He is regarded as one of the greatest batsmen in the history of cricket.[4] He is the highest run scorer of all time in international cricket, and the only player to have scored one hundred international centuries, the first batsman to score a double century in a One Day International (ODI), the holder of the record for the most runs in both Test and ODI cricket, and as of 2021 the only player to score more than 30,000 runs in international cricket.[5] He was the only Indian cricketer included in an all-time Test World XI compiled in 2013 to mark the 150th anniversary of Wisden Cricketers' Almanack.[6][7] He is affectionately known as Little Master or Master Blaster.",
 "year": "1989",
 "affiliations": ["Whitehat", "Enshure", "Nike", "Educative.io"],
 "Otherteammates": ["Rohit Sharma", "MS Dhoni", "Sachin", "Jadeja"],
 "teams": ["India", "Mumbai Indians", "India Red", "India U19"],
 "runs": "18426",
 }
}

# ROUTES

@app.route('/')
def hello_world():
   return render_template('homepage.html', data = data)   

@app.route('/view/<id>')
def view(id):
   return render_template('view.html', data = data, id = id)    

@app.route('/add', methods=['GET'])
def addget():
   print("get")
   return render_template('add.html', data=data, id = id)   

@app.route('/add', methods=['POST'])
def add():
   global current_id
   global data

   json_data = request.get_json()
   print(json_data)
   # id = json_data["id"]
   affiliations = json_data["affiliations"]
   # affiliations = affiliations.split(',')
   print(type(affiliations))
   summary = json_data["summary"]
   year = json_data["year"]
   ranking = json_data["ranking"]
   name = json_data["name"]
   teams = json_data["teams"]
   # teams = teams.split(',')
   Otherteammates = json_data["Otherteammates"]
   # Otherteammates = Otherteammates.split(',')
   runs = json_data["runs"]
   image = json_data["image"]
   # print(link)
   print(current_id)
   obj = {
        "id": current_id,
        "name": f"{name}",
        "ranking": f"{ranking}",
        "teams": f"{teams}",
        "Otherteammates": Otherteammates,
         "teams": teams,
        "runs":  f"{runs}",
        "summary":  f"{summary}",
        "year":  f"{year}",
        "image" : f"{image}",
        "affiliations": affiliations
    }
   data[f"{current_id}"] = obj
   id = current_id
   current_id += 1
   print(data)
   return jsonify(data=data)
   # return render_template('add.html', data = data, id = id)   

@app.route('/edit/<id>', methods = ['GET'])
def editget(id):
   return render_template('edit.html', data = data, id = id)     

@app.route('/edit/view/<id>', methods = ['GET, POST'])
def editview(id):
   return redirect('/view', data = data, id = id)     


@app.route('/edit', methods = ['POST'])
def edit():
   global data
   json_data = request.get_json()
   print(json_data)
   id = json_data["id"]
   affiliations = json_data["affiliations"]
   # affiliations = affiliations.split(',')
   summary = json_data["summary"]
   year = json_data["year"]
   ranking = json_data["ranking"]
   name = json_data["name"]
   teams = json_data["teams"]
   # teams = teams.split(',')
   Otherteammates = json_data["Otherteammates"]
   # Otherteammates = Otherteammates.split(',')
   runs = json_data["runs"]
   image = json_data["image"]
   # print(link)
   obj = {
        "id": f"{id}",
        "name": f"{name}",
        "ranking": f"{ranking}",
        "teams": f"{teams}",
        "Otherteammates": Otherteammates,
         "teams": teams,
        "runs":  f"{runs}",
        "summary":  f"{summary}",
        "year":  f"{year}",
        "image" : f"{image}",
        "affiliations": affiliations
    }
   data[f"{id}"] = obj
 
   return render_template('view.html', data = data, id = id)   


@app.route('/results/<name>', methods=('GET', 'POST'))
def search_keyword(name):
   myset = []
   cricketer_item = {
      'item' : name
   }
   for idx, str in enumerate(data.values()):
      print(type(str["affiliations"]))
      for x in str['affiliations']:
         if x.lower().find(name.lower()) != -1:
            myset.append(str)
      for x in (str['teams']):
         if (x.lower().find(name.lower()) != -1):
            myset.append(str)   
      if(str['name'].lower().find(name.lower()) != -1):
         myset.append(str)
   print(str['name'])      
   searched = [i for n, i in enumerate(myset) if i not in myset[:n]]
   # print(searched)
   return render_template('results.html', searched = searched, cricketer_item = cricketer_item)      


if __name__ == '__main__':
   app.run(debug = True)




