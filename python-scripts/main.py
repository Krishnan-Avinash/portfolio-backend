import json
import requests
from bs4 import BeautifulSoup


def get_data():
    url="https://www.geeksforgeeks.org/user/avinashkriad3q/"
    r=requests.get(url)
    htmlContent=r.content
    soup=BeautifulSoup(htmlContent,'html.parser')
    text=soup.find_all('script',id="__NEXT_DATA__")[0].get_text()
    data=json.loads(text)
    total_problems_solved=data["props"]["pageProps"]["userInfo"]["total_problems_solved"]
    easyCount=0
    easy=data["props"]["pageProps"]["userSubmissionsInfo"]["Easy"]
    medium=data["props"]["pageProps"]["userSubmissionsInfo"]["Medium"]
    hard=data["props"]["pageProps"]["userSubmissionsInfo"]["Hard"]
    easyCount=len(easy)
    mediumCount=len(medium)
    hardCount=len(hard)
    objectToReturn={
        "totalSolved":total_problems_solved,
        "easySolved":easyCount,
        "mediumSolved":mediumCount,
        "hardSolved":hardCount
    }
    return objectToReturn

if __name__ == "__main__":
    result = get_data()
    print(result)