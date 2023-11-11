import threading,httpx
Session=httpx.Client(timeout=10,verify=False)

def Spam():
    while True:
        Session.get("http://localhost:8081/stats")

if __name__ == "__main__": # test load
    for i in range(10):
        threading.Thread(target=Spam).start()