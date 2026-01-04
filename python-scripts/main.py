import json
import requests
from bs4 import BeautifulSoup


def get_data():
    url="https://www.geeksforgeeks.org/user/avinashkriad3q/"
    r=requests.get(url)
    htmlContent=r.content
    soup=BeautifulSoup(htmlContent,'html.parser')
    text=soup.find_all('script')[-1].get_text()

    key = 'userData'

    start = text.find(key)
    if start == -1:
        raise ValueError("userData not found")

    # move to the opening {
    start = start + len(key)

    # skip whitespace if any
    while text[start] != '{':
        start += 1

    brace_count = 1
    end = start + 1

    for i in range(start + 1, len(text)):
        if text[i] == '{':
            brace_count += 1
        elif text[i] == '}':
            brace_count -= 1
            if brace_count == 0:
                end = i + 1
                break

    user_data_text = text[start:end]

    # print("USER DATA TEXT:", user_data_text)
    user_data_text = json.loads(f'"{user_data_text}"')

    data = json.loads(user_data_text)
    total_problems_solved=data["data"]["total_problems_solved"]

    easyCount=0
    # easy=data["props"]["pageProps"]["userSubmissionsInfo"]["Easy"]
    # medium=data["props"]["pageProps"]["userSubmissionsInfo"]["Medium"]
    # hard=data["props"]["pageProps"]["userSubmissionsInfo"]["Hard"]
    easyCount=-1
    mediumCount=-1
    hardCount=-1
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