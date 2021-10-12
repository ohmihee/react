
# back에서 설치한 것 
=> nodejs / mysql
# front 설치해야할 것
=> nodejs /nginx(-> express대신 실무에서 많이 사용)
** nginx - 환경설정필요
80번 포트로 서버를 열것임

** nodejs 설치 명령어
sudo apt-get update
sudo apt-get install -y build-essetial
sudo apt-get install curl
curl -sL http://deb.nodesource.com/setup_14.x | sudo -E bash --         // 설치한 nodejs 버전이 14여서
sudo apt-get install -y node.js

** nginx설치
sudo apt-get install nginx  => 중간에 y 입력


# 환경설정
cd /etc/nginx
ls -al
1. nginx.conf : 설정파일 (text파일)   (##의 내용은 주석 -> 즉 해당부분은 실행되는 내용 아님)
2. sites-availabel : (폴더)는 설정파일 저장소
    ex) 변수선언해서 내용을 입력만 받은 상태 arr = [1,2,3,4,5,6,7,8,9]
3. sites-enabled : (폴더) => 설정파일을 실행시키는 역할
        ex) arr[0]//1
            arr[2]//3
            arr[4]//5
    윈도우로 -> 바로가기로 만들어서 실행 -> 심볼릭 링크

    sites-availabel -> 설정파일을 만들고
    sites-enables -> 바로가기 셋팅하기

    nginx 실행

    vi 많이 쓸거임

    cp 명령어 => 폴더나 파일을 복사 copy
    mv => 폴더나 파일을 이동 move

    unix,linux,window
    유료  무료  유료

    계정에 따른 권한들이 잘 설정되어 있음
    ex)         소유권 그룹
    drwxr-xr-x 2 root root 4096 Jul 20 02:42 sites-available
    ~~ root 가 적힌 것은 sudo 즉 최고권리자만 가능

    cp -r => cp -r [기존디렉토리] [변경할디렉토리]
    ex) sudo cp -r /etc/nginx/sites-available /etc/nginx/sites-available-backup
        sudo cp -r /etc/nginx/sites-enabled /etc/nginx/sites-enabled-backup

    /etc/nginx
    cd sites-available
    ls -al => default파일 확인
    sudo rm default => 해당 파일의 권리는 최고관리자에게 있으므로 sudo를 붙임
    cd ..

    cd sites-enabled
    ls -al => default파일 확인
    sudo rm default => 최고관리자 권한으로 default 삭제

    vi => 파일이 있으면 파일을 읽고, 파일이 없으면 파일 생성
     ex) sudo vi myapp   =>  현재 최고관리자 권한 아래 있으므로 sudo 붙임
 
 sudo vi myapp.conf

    server{
        listen 80;   // 80번 포트를 이용
        location / {
            root /home/ubuntu/www;
            index index.html index.htm;    // index.htm -> 오타아님
            try_files $rui /index.html;
        }
    }

cp [기존디렉토리] [변경할디렉토리]
mv [기존디렉토리] [변경할디렉토리]
ln -s [기존디렉토리] [바로가기만들디렉토리]

sudo ln -s /etc/nginx/sites-available/myapp.conf /etc/nginx/sites-enabled/myapp.conf
/etc/nginx에서
sudo nginx -t
sudo systemctl start nginx  -> nginx 켜기
sudo systemctl stop nginx  -> nginx 끄지
sudo systemctl restart nginx  -> nginx 재시작

**webpack => server아님   // webpack은 단순히 build역할만 함
// webpack 여러개의 js,css 파일 등을 하나의 파일로 만들어줌
// dev server는 단순히 개발 서버


0721===============================================================
cd /etc/nginx
ls -al /sites-available
cd sites-available
ls -al //myapp.conf확인
sudo vi myapp.conf

/home/ubuntu/ www <--폴더생성
www 안에 들어가서 index.html만들 것임

***리눅스 기본적 명령어============================================
rm
mv
cp
ln
vi
cd
ls -al
ps -ef | grep [찾을프로세스명]
kill -9 [pid]
pwd
mkdir
***폴더구조=========================================================
cd ~
cd /




mkdir -> 폴더생성명령어


cd ~ -> 홈디렉토리
mkdir www
ls
cd www
ls
vi index.html  

i -> insert mode 내용입력 후
esc -> shift+: -> wq!    -> 해당 파일 나옴

publicip로 들어가서 페이지 확인해보면 index.html 파일 생성한 곳에 넣은 내용이 보여짐

** nginx 설치할 때 오류나면 대처====================================
cd /etc/nginx/sites-enabled
ls -al
myapp.conf <-- 제대로 설정되어 있는지 확인 -> 빨간색으로 되어 있으면 안됨
cd ..
cd sites-available
ls -al
myapp.conf 잘 있는지 확인
sudo vi myapp.conf -> 내용이나 문법이 잘 적혀있는지 확인
  -> 파일 내부에 오류가 있는 상황에서 nginx를 켰을 때 
    -> sudo systemctl status nginx -> 상태값 확인 (오류가 발생한 위치 알려줌)




    0722-도메인 연결========================================================
    money필요 -> 대여형식
    도메인 구매처 -> 가비아 / 후이즈 

    backend frontend 서버 나뉘서 계속 진행하게 될 경우 
    도메인 거의 필수
    login 새로고침시 로그인이 풀리는 현상을 막기 위해 ()

    // git init한 곳에서는 git clone 하면 안된다.

/back
/front
/webpack5   //git clone https://github.com/ingoo-code/webpack5.git

webpack가져온 후
//cd front # 경로 확인/ npm i 


npm run build  -> dist라는 폴더 생성


** build=======================================
??dist 누가 만듦??  -> webpack이 만듦
// webpack => 절대 서버가 아님


    
