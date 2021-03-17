<template>
  <div>
    <Header></Header>
    <Profile></Profile>
    <!-- my intro start -->
    <section id="hello" class="container section">
      <div class="row">
        <div class="col-md-10">
          <h2
            id="hello_header"
            class="section__title"
            style="text-indent: 0px;"
          >
            자기소개_
          </h2>
          <p class="section__description">
            안녕하세요 실리콘밸리 개발자를 꿈꾸고 있는 주니어 개발자 박홍철
            입니다.<br />
            저는 보안 관련 특성화 고등학교를 졸업하여 일찍 취업시장에 뛰어
            들었습니다.<br />
            경쟁이 심한 취업시장에서 살아 남고자 주말에 열심히 공부하여 대학교를
            졸업 하였고<br />
            회사에 인정받고자 맡은일에 최선을 다했습니다.<br />
            어린 나이이지만 지금까지 사회생활을 통해 많은것을 느꼈기 때문에
            남들보다 잘할 자신이 있습니다.<br />
            저에게 맡겨 주신다면 작은 고추가 맵듯이 책임감 있는 모습을 보여
            드리겠습니다.<br />
            읽어 주셔서 감사합니다.
          </p>
          <!-- 파일 다운로드
          <a href="" class="section_btn site-btn"><img src="assets/img/img_btn_icon.png" alt="">Download CV</a> 
          -->
        </div>
      </div>
    </section>
    <!-- my intro end -->

    <!-- my history start -->
    <section id="career" class="container section">
      <div class="row">
        <div class="col-md-10">
          <h2
            id="resume_header"
            class="section__title"
            style="text-indent: 0px;"
          >
            경력사항_
          </h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 section__resume resume-list">
          <h3 class="resume-list_title">참여사업</h3>
          <div class="resume-list__block">
            <p class="resume-list__block-title">
              (고등학교 기업현장실습)보안관제 - 보안 위협에 대한 실시간 모니터링
            </p>
            <p class="resume-list__block-date">2015.08 - 2015.11</p>
            <p>
              - WAF, IPS, IDS, ANTI DDos를 이용한 실시간 감시 및 방어<br />
              - 고객사 서버, 홈페이지의 보안 위협에 대한 보고서 작성
            </p>
          </div>
          <div class="resume-list__block">
            <p class="resume-list__block-title">
              도매쇼핑몰 신규 홈페이지 기획 및 개발
            </p>
            <p class="resume-list__block-date">2015.12 - 2016.08</p>
            <p>
              - 셀러, 도매 관련 홈페이지 및 프로그램을 분석하여 홈페이지 기획<br />
              - Spring Framework를 이용한 사용자, 상품관리시스템 구축
            </p>
          </div>
          <div class="resume-list__block">
            <p class="resume-list__block-title">
              부엉넷 - 인터넷 강의 홈페이지 모바일 화면 퍼블리싱
            </p>
            <p class="resume-list__block-date">2016.08 - 2016.10</p>
            <p>
              - HTML, CSS, JavaScript를 이용하여 모바일 화면 구축
              <br />링크 :
              <a
                href="http://www.eduowl.net"
                target="_blank"
                class="project-card__link"
                >www.eduowl.net</a
              >
            </p>
          </div>
          <div class="resume-list__block">
            <p class="resume-list__block-title">
              대한송유관공사 - 대한송유관공사 신규 홈페이지 구축 용역
            </p>
            <p class="resume-list__block-date">2016.10 - 2017.01</p>
            <p>
              - Wordpress(PHP) 테마를 생성하여 홈페이지 구축
              <br />링크 :
              <a
                href="http://www.dopco.co.kr"
                target="_blank"
                class="project-card__link"
                >www.dopco.co.kr</a
              >
            </p>
          </div>
          <div class="resume-list__block">
            <p class="resume-list__block-title">
              (사)한-아프리카교류협회 - 홈페이지 개선 및 자료관리시스템 구축사업
            </p>
            <p class="resume-list__block-date">2016.12 - 2017.06</p>
            <p>
              - Spring Framework를 이용한 사용자 홈페이지 개선, 자료관리
              시스템(CMS) 구축<br />
              - Konan Search 솔루션을 이용한 검색 서비스 구축
            </p>
          </div>
          <div class="resume-list__block">
            <p class="resume-list__block-title">
              대한송유관공사 - 대한송유관공사 신규 영문 홈페이지 구축 용역
            </p>
            <p class="resume-list__block-date">2017.02 - 2017.04</p>
            <p>
              - 이전에 개발한 국문 홈페이지에 대한 영문 홈페이지 구축
              <br />링크 :
              <a
                href="http://www.dopco.co.kr/eng/"
                target="_blank"
                class="project-card__link"
                >www.dopco.co.kr/eng/</a
              >
            </p>
          </div>
          <div class="resume-list__block">
            <p class="resume-list__block-title">
              서울지방조달청 - 2017년도 사이버선거역사관 고도화 사업
            </p>
            <p class="resume-list__block-date">2017.08 - 2017.12</p>
            <p>
              - 전자정부프레임워크를 이용한 사용자 홈페이지, 콘텐츠 관리
              시스템(CMS) 구축<br />
              - Konan Search 솔루션을 이용한 검색 서비스 구축
              <br />링크 :
              <a
                href="https://museum.nec.go.kr"
                target="_blank"
                class="project-card__link"
                >museum.nec.go.kr</a
              >
            </p>
          </div>
          <div class="resume-list__block">
            <p class="resume-list__block-title">
              한국항만협회 - 해외항만개발정보서비스 유저 인터페이스 리모델링
            </p>
            <p class="resume-list__block-date">2017.10 - 2018.04</p>
            <p>
              - Spring Framework로 개발된 홈페이지에 대한 유저 인터페이스
              리모델링 및 관리자 기능 유지보수
              <br />링크 :
              <a
                href="http://www.coscop.or.kr"
                target="_blank"
                class="project-card__link"
                >www.coscop.or.kr</a
              >
            </p>
          </div>
          <div class="resume-list__block">
            <p class="resume-list__block-title">
              중앙선거관리위원회 - 선거정보도서관 유지보수 사업
            </p>
            <p class="resume-list__block-date">2018.01 - 2018.12</p>
            <p>
              - Spring Framework로 개발된 홈페이지에 대한 유지보수
              <br />링크 :
              <a
                href="http://elecinfo.nec.go.kr"
                target="_blank"
                class="project-card__link"
                >elecinfo.nec.go.kr</a
              >
            </p>
          </div>
          <div class="resume-list__block">
            <p class="resume-list__block-title">
              도매기업 발주시스템 년간 유지보수
            </p>
            <p class="resume-list__block-date">2018.02 - 2019.02</p>
            <p>
              - PHP로 개발된 발주시스템에 대한 기능 추가 및 유지보수
            </p>
          </div>
          <div class="resume-list__block">
            <p class="resume-list__block-title">
              ㈜에이치에스애드 - H&A POSM 시스템 리뉴얼 및 모바일 버전 개발
            </p>
            <p class="resume-list__block-date">2018.03 - 2019.02</p>
            <p>
              - LG Framework를 이용한 LG 가전제품 관리시스템 리뉴얼 및 모바일
              버전 구축<br />
              - Amazon CDN을 이용한 전세계 홈페이지 접속 속도 개선<br />
              - Amazon EC2를 이용한 홈페이지 서버 구축
            </p>
          </div>
          <div class="resume-list__block">
            <p class="resume-list__block-title">
              국립박물관문화재단 - 국립박물관문화재단 통합 홈페이지 구축
            </p>
            <p class="resume-list__block-date">2018.07 - 2018.12</p>
            <p>
              - ASP로 개발되어 있던 시스템을 전자정부 프레임워크를 이용하여
              사용자 홈페이지, 콘텐츠 관리 시스템(CMS) 구축<br />
              - 인터파크와 연동하여 예매 시스템 구축
              <br />링크1 :
              <a
                href="https://www.cfnmk.or.kr"
                target="_blank"
                class="project-card__link"
                >www.cfnmk.or.kr</a
              >
              <br />링크2 :
              <a
                href="https://museumshop.or.kr"
                target="_blank"
                class="project-card__link"
                >museumshop.or.kr</a
              >
            </p>
          </div>
          <div class="resume-list__block">
            <p class="resume-list__block-title">
              성북구청 - 2019년 성북구 홈페이지 웹 서비스 통합 유지보수
            </p>
            <p class="resume-list__block-date">2018.12 - 2019.11</p>
            <p>
              - 전자정부 프레임워크를 이용한 관리자 시스템 구축 및 현재 운영중인
              홈페이지에 대해 유지보수
              <br />링크 :
              <a
                href="http://www.sb.go.kr"
                target="_blank"
                class="project-card__link"
                >www.sb.go.kr</a
              >
            </p>
          </div>
          <div class="resume-list__block">
            <p class="resume-list__block-title">
              성북구청 - 협치성북 홈페이지 구축용역
            </p>
            <p class="resume-list__block-date">2019.10 - 2019.12</p>
            <p>
              - 전자정부 프레임워크를 이용한 협치성북 홈페이지 구축
              <br />링크 :
              <a
                href="http://www.sb.go.kr/hcsb/mainPage.do"
                target="_blank"
                class="project-card__link"
                >www.sb.go.kr/hcsb/mainPage.do</a
              >
            </p>
          </div>
          <div class="resume-list__block">
            <p class="resume-list__block-title">
              성동문화재단 - 홈페이지 리뉴얼 및 CMS 구축
            </p>
            <p class="resume-list__block-date">2020.01 - 2020.04</p>
            <p>
              - 전자정부 프레임워크를 이용한 사용자 홈페이지 리뉴얼<br />
              - 콘텐츠 관리 시스템(CMS) 구축<br />
              - 인터파크와 연동하여 예매 시스템 구축
              <br />링크 :
              <a
                href="http://www.sdfac.or.kr/"
                target="_blank"
                class="project-card__link"
                >www.sdfac.or.kr</a
              >
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- my history end -->

    <!-- my skill start -->
    <section id="resume" class="container section">
      <div class="row">
        <div class="col-md-10">
          <h2
            id="resume_header"
            class="section__title"
            style="text-indent: 0px;"
          >
            보유기술_
          </h2>
          <!-- <p class="section__description">
          설명
          </p> -->
        </div>
      </div>

      <div class="row">
        <div class="col-md-8 section__resume resume-list">
          <h3 class="resume-list_title">자격증</h3>
          <div class="resume-list__block">
            <p class="resume-list__block-title">인터넷윤리인증(IEQ) - 1급</p>
            <p class="resume-list__block-date">2013.11</p>
            <p>
              한국생산성본부
            </p>
          </div>
          <div class="resume-list__block">
            <p class="resume-list__block-title">리눅스마스터 - 2급</p>
            <p class="resume-list__block-date">2013.12</p>
            <p>
              한국정보통신진흥협회
            </p>
          </div>
          <div class="resume-list__block">
            <p class="resume-list__block-title">pc정비사 - 2급</p>
            <p class="resume-list__block-date">2014.12</p>
            <p>
              한국정보통신자격협회
            </p>
          </div>
          <div class="resume-list__block">
            <p class="resume-list__block-title">
              ITQ(엑셀,파워포인트,한글) - A
            </p>
            <p class="resume-list__block-date">2015.01</p>
            <p>
              한국생산성본부
            </p>
          </div>
          <div class="resume-list__block">
            <p class="resume-list__block-title">정보처리기능사</p>
            <p class="resume-list__block-date">2015.04</p>
            <p>
              미래창조과학부
            </p>
          </div>
          <div class="resume-list__block">
            <p class="resume-list__block-title">네트워크관리사 - 2급</p>
            <p class="resume-list__block-date">2015.06</p>
            <p>
              한국정보통신진흥협회
            </p>
          </div>
          <div class="resume-list__block">
            <p class="resume-list__block-title">정보기기운용기능사</p>
            <p class="resume-list__block-date">2015.07</p>
            <p>
              미래창조과학부
            </p>
          </div>
        </div>
      </div>

      <div class="row section__resume progress-list js-progress-list">
        <div class="col-md-12">
          <h3 class="progress-list__title">프로그래밍 능력</h3>
        </div>
        <div class="col-md-5 mr-auto">
          <div class="progress-list__skill">
            <p>
              <span class="progress-list__skill-title"
                >HTML, CSS, JAVASCRIPT, JQUERY</span
              >
              <span class="progress-list__skill-value">80%</span>
            </p>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div class="progress-list__skill">
            <p>
              <span class="progress-list__skill-title">JAVA</span>
              <span class="progress-list__skill-value">70%</span>
            </p>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div class="progress-list__skill">
            <p>
              <span class="progress-list__skill-title">PHP</span>
              <span class="progress-list__skill-value">70%</span>
            </p>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div class="progress-list__skill">
            <p>
              <span class="progress-list__skill-title">ASP</span>
              <span class="progress-list__skill-value">30%</span>
            </p>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="30"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div class="progress-list__skill">
            <p>
              <span class="progress-list__skill-title">SPRING FRAMEWORK</span>
              <span class="progress-list__skill-value">70%</span>
            </p>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div class="progress-list__skill">
            <p>
              <span class="progress-list__skill-title">SVN</span>
              <span class="progress-list__skill-value">90%</span>
            </p>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
        <div class="col-md-5 mr-auto">
          <div class="progress-list__skill">
            <p>
              <span class="progress-list__skill-title">C</span>
              <span class="progress-list__skill-value">70%</span>
            </p>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div class="progress-list__skill">
            <p>
              <span class="progress-list__skill-title">C++</span>
              <span class="progress-list__skill-value">60%</span>
            </p>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div class="progress-list__skill">
            <p>
              <span class="progress-list__skill-title">PYTHON</span>
              <span class="progress-list__skill-value">70%</span>
            </p>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div class="progress-list__skill">
            <p>
              <span class="progress-list__skill-title">RUBY</span>
              <span class="progress-list__skill-value">50%</span>
            </p>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div class="progress-list__skill">
            <p>
              <span class="progress-list__skill-title">PYTHON FLASK</span>
              <span class="progress-list__skill-value">50%</span>
            </p>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- my skill end -->



    <!--Portfolio start-->
    <section id="portfolio" class="container section">
      <div class="row">
        <div class="col-md-12">
          <h2 id="portfolio_header" class="section__title" style="text-indent: -9999px;">개인 프로젝트_</h2>
        </div>
      </div>
      <div class="row portfolio-menu">
        <div class="col-md-12">
          <nav>
            <ul>
              <li><a href="" data-portfolio-target-tag="all">all</a></li>
              <li><a href="" data-portfolio-target-tag="mobile apps">mobile apps</a></li>
              <li><a href="" data-portfolio-target-tag="PC-Program">PC Program</a></li>
              <li><a href="" data-portfolio-target-tag="web-sites">web-sites</a></li>
              <li><a href="" data-portfolio-target-tag="python">python</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="portfolio-cards">
        <div class="row project-card" data-toggle="modal" data-target="#portfolioModal1" data-portfolio-tag="mobile apps">
          <div class="col-md-6 col-lg-5 project-card__img">
            <img class="" src="assets/img/project/1/thumb.png" alt="project-img">
          </div>
          <div class="col-md-6 col-lg-7 project-card__info">
            <h3 class="project-card__title">맛집 리뷰 어플</h3>
            <p class="project-card__description">
              본 어플은 맛집 후기를 통해 질좋은 맛집들을 소개하고 지도를 통해 맛집을 쉽게 찾을 수 있으며 예약하기를 통해 미리 가기전에 예약을 할 수 있습니다.
            </p>
            <p class="project-card__stack">Used stack:</p>
            <ul class="tags">
              <li>ANDROID JAVA</li>
              <li>PYTHON FLASK</li>
              <li>MYSQL</li>
              <li>Retrofit</li>
              <li>Picasso</li>
              <li>Google Map API</li>
            </ul>
            <a href="" class="project-card__link">www.travellend.com</a>
          </div>
        </div>
      </div>
    </section>
  <!--Portfolio end-->
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Profile from "@/components/Profile.vue";
import portfolioJson from "@/data/portfolio.json";

export default {
  components: {
    Header,
    Profile
  },
  mounted(){
    console.log(portfolioJson.tags);
  }
};
</script>
