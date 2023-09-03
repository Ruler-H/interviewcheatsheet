const firstPage = `
<p class="card-group-title">여러분의 경력은?</p>
<div class="card-container">
	<div class="card fP-card">
		<img src="./assets/dist/images/ormi.jpg" alt="주니어 개발자 이미지" class="card-img">
		<div class="card-body fP-cardBody">
			<h5 class="card-title fP-cardTitle">주니어 개발자</h5>
			<button class="btn btn-primary career-select-btn">선택하기</button>
		</div>
	</div>
	<div class="card career-second-card">
		<img src="./assets/dist/images/ormi.jpg" alt="미드 레벨 개발자 이미지" class="card-img">
		<div class="card-body fP-cardBody">
			<h5 class="card-title fP-cardTitle">미드 레벨 개발자</h5>
			<button class="btn btn-primary career-select-btn">선택하기</button>
		</div>
	</div>
	<div class="card fP-card fP-thirdCard">
		<img src="./assets/dist/images/ormi.jpg" alt="시니어 개발자 이미지" class="card-img">
		<div class="card-body fP-cardBody">
			<h5 class="card-title fP-cardTitle">시니어 개발자</h5>
			<button class="btn btn-primary career-select-btn">선택하기</button>
		</div>
	</div>
</div>
`;

const jobSelectPage = `
<p class="card-group-title">여러분의 분야는?</p>
<div class="card-container">
	<div class="card jSP-card">
		<img src="./assets/dist/images/ormi.jpg" alt="주니어 개발자 이미지" class="card-img">
		<div class="card-body jSP-cardBody">
			<h5 class="card-title jSP-cardTitle">백엔드 개발자</h5>
			<button class="btn btn-primary job-select-btn">선택하기</button>
		</div>
	</div>
	<div class="card job-second-card jSP-card">
		<img src="./assets/dist/images/ormi.jpg" alt="주니어 개발자 이미지" class="card-img">
		<div class="card-body  jSP-cardBody">
			<h5 class="card-title jSP-cardTitle">프론트엔드 개발자</h5>
			<button class="btn btn-primary job-select-btn">선택하기</button>
		</div>
	</div>
</div>
<button type="button" class="btn btn-secondary btn-lg pre-btn">이전으로</button>
`;

const interviewStartPage = `
<p class="start-desc">당신은 BackEnd Junior 개발자입니다.<br> 맞다면 모의 면접 시작 버튼을 눌러주세요.</p>
	
<div class="group-btn">
	<a type="button" class="btn btn-secondary btn-lg job-select-btn">이전으로</a>
	<a type="button" class="btn btn-primary btn-lg interview-start-btn">시작하기</a>
</div>
`;

const interviewPage = `
<div class="card text-center iP-container">
	<div class="card-header iP-cardHeader">
		<p>난이도 : 하</p>
		<p>1 / 10</p>
	</div>
	<div class="card-body">
		<div class="iP-question">
			<p class="card-text">
				Python에서의 메모리 관리 기법에 대해 설명해 보세요.
			</p>
		</div>
		<div class="input-group iP-inputGroup">
			<span class="input-group-text">답변</span>
			<textarea class="form-control iP-textarea" aria-label="With textarea"></textarea>
			<button class="btn btn-outline-secondary submit-btn" type="button"button-addon2">제출하기</button>
		</div>
	</div>
	<div class="card-footer text-muted iP-cardFooter">
		00:00
	</div>
</div>
`;

const resultPage = `
<div class="card text-center rP-container">
<div class="card-header rP-cardHeader">
	<p>난이도 : 하</p>
	<div class="rP-rightHeader">
		<p>1 / 10</p>
		<img src="./assets/dist/images/empty-star.png" class="rP-star" alt="빈 별">
	</div>
</div>
<div class="card-body rP-cardBody">
	<div class="rP-cardContent">
		<h5 class="card-title rP-questionPurpose">질문 의도</h5>
		<hr class="rP-hr">
		<p class="card-text rP-cardText">
			현업 개발에 있어서 메모리 누수를 해결하지 않는다면 메모리 사용량이 증가되면서 시스템의 메모리가 부족해 운영체제가 프로그램을 강제 종료시키는 등의 문제가 발생한다. 때문에 메모리 정리에 중요성을 인식하고 있는지, 또한 메모리 정리의 중요 Point인 Garbage Collection을 이해하고 있는지 묻는 질문이다.
		</p>
	</div>
	<div class="rP-cardContent">
		<h5 class="card-title rP-questionAnswer">만점 답안</h5>
		<hr class="rP-hr">
		<p class="card-text rP-cardText">
			현업 개발에 있어서 메모리 누수를 해결하지 않는다면 메모리 사용량이 증가되면서 시스템의 메모리가 부족해 운영체제가 프로그램을 강제 종료시키는 등의 문제가 발생한다. 때문에 메모리 정리에 중요성을 인식하고 있는지, 또한 메모리 정리의 중요 Point인 Garbage Collection을 이해하고 있는지 묻는 질문이다.
		</p>
	</div>
</div>
</div>
<a type="button" class="btn btn-primary btn-lg rP-nextBtn">다음 문제</a>
`;

const finalResultPage = `
<div class="card text-center fRP-container">
<div class="card-header fRP-cardHeader">
	<p>총점 : 8.5점</p>
</div>
<div class="card-body fRP-cardBody">
	<div class="fRP-cardContent">
		<h5 class="card-title fRP-redeem">보완점</h5>
		<hr class="fRP-hr">
		<p class="card-text">
			웹 통신에 대한 개념을 보완하여...
		</p>
	</div>
</div>
</div>
<a type="button" class="btn btn-primary btn-lg fRP-restartBtn">다시하기</a>
`

const BEPage = `
<div class="BEP-title">
			<p class="h1 BEP-h1">BE Cheat Sheet</p>
		</div>
		<div class="BEP-cardGroup">
			<div class="card text-center BEP-container">
				<div class="card-header BEP-cardHeader">
					<p>난이도 : 하</p>
					<img src="./assets/dist/images/empty-star.png" class="BEP-star" alt="빈 별">
				</div>
				<div class="card-body BEP-cardBody">
					<div class="BEP-cardContent">
						<p class="card-text">
							Python 메모리 관리 기법에 대해 설명해 보세요.
						</p>
						<h5 class="card-title BEP-subHeading">질문 의도</h5>
						<hr class="BEP-hr">
						<p class="card-text">
							현업 개발에 있어서 메모리 누수를 해결하지 않는다면 메모리 사용량이 증가되면서 시스템의 메모리가 부족해 운영체제가 프로그램을 강제 종료시키는 등의 문제가 발생한다. 때문에 메모리 정리에 중요성을 인식하고 있는지, 또한 메모리 정리의 중요 Point인 Garbage Collection을 이해하고 있는지 묻는 질문이다.
						</p>
						<h5 class="card-title BEP-subHeading">만점 답안</h5>
						<hr class="BEP-hr">
						<p class="card-text">
							메모리를 직접 관리하게 되는 경우 여러 애로 사항이 있는데, 첫 번째는 필요없는 메모리를 해제하지 않는 경우 메모리 누수로 이어지고 이러한 누수가 누적되면 치명적인 문제가 된다는 것입니다. 두 번째는 사용 중인 메모리를 잘못 중단하게 되면, 중요 데이터의 일부가 손상될 수 있다는 것입니다.
						</p>
					</div>
				</div>
			</div>
			<div class="card text-center BEP-container">
				<div class="card-header BEP-cardHeader">
					<p>난이도 : 하</p>
					<img src="./assets/dist/images/empty-star.png" class="BEP-star" alt="빈 별">
				</div>
				<div class="card-body BEP-cardBody">
					<div class="BEP-cardContent">
						<p class="card-text">
							Python 메모리 관리 기법에 대해 설명해 보세요.
						</p>
						<h5 class="card-title BEP-subHeading">질문 의도</h5>
						<hr class="BEP-hr">
						<p class="card-text">
							현업 개발에 있어서 메모리 누수를 해결하지 않는다면 메모리 사용량이 증가되면서 시스템의 메모리가 부족해 운영체제가 프로그램을 강제 종료시키는 등의 문제가 발생한다. 때문에 메모리 정리에 중요성을 인식하고 있는지, 또한 메모리 정리의 중요 Point인 Garbage Collection을 이해하고 있는지 묻는 질문이다.
						</p>
						<h5 class="card-title BEP-subHeading">만점 답안</h5>
						<hr class="BEP-hr">
						<p class="card-text">
							메모리를 직접 관리하게 되는 경우 여러 애로 사항이 있는데, 첫 번째는 필요없는 메모리를 해제하지 않는 경우 메모리 누수로 이어지고 이러한 누수가 누적되면 치명적인 문제가 된다는 것입니다. 두 번째는 사용 중인 메모리를 잘못 중단하게 되면, 중요 데이터의 일부가 손상될 수 있다는 것입니다.
						</p>
					</div>
				</div>
			</div>
			<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chevron-right BEP-arrow" viewBox="0 0 16 16">
				<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
			</svg>
		</div>
`

const FEPage = `
<div class="FEP-title">
<p class="h1 FEP-h1">FE Cheat Sheet</p>
</div>
<div class="FEP-cardGroup">
<div class="card text-center FEP-container">
	<div class="card-header FEP-cardHeader">
		<p>난이도 : 하</p>
		<img src="./assets/dist/images/empty-star.png" class="FEP-star" alt="빈 별">
	</div>
	<div class="card-body FEP-cardBody">
		<div class="FEP-cardContent">
			<p class="card-text">
				Python 메모리 관리 기법에 대해 설명해 보세요.
			</p>
			<h5 class="card-title FEP-subHeading">질문 의도</h5>
			<hr class="FEP-hr">
			<p class="card-text">
				현업 개발에 있어서 메모리 누수를 해결하지 않는다면 메모리 사용량이 증가되면서 시스템의 메모리가 부족해 운영체제가 프로그램을 강제 종료시키는 등의 문제가 발생한다. 때문에 메모리 정리에 중요성을 인식하고 있는지, 또한 메모리 정리의 중요 Point인 Garbage Collection을 이해하고 있는지 묻는 질문이다.
			</p>
			<h5 class="card-title FEP-subHeading">만점 답안</h5>
			<hr class="FEP-hr">
			<p class="card-text">
				메모리를 직접 관리하게 되는 경우 여러 애로 사항이 있는데, 첫 번째는 필요없는 메모리를 해제하지 않는 경우 메모리 누수로 이어지고 이러한 누수가 누적되면 치명적인 문제가 된다는 것입니다. 두 번째는 사용 중인 메모리를 잘못 중단하게 되면, 중요 데이터의 일부가 손상될 수 있다는 것입니다.
			</p>
		</div>
	</div>
</div>
<div class="card text-center FEP-container">
	<div class="card-header FEP-cardHeader">
		<p>난이도 : 하</p>
		<img src="./assets/dist/images/empty-star.png" class="FEP-star" alt="빈 별">
	</div>
	<div class="card-body FEP-cardBody">
		<div class="FEP-cardContent">
			<p class="card-text">
				Python 메모리 관리 기법에 대해 설명해 보세요.
			</p>
			<h5 class="card-title FEP-subHeading">질문 의도</h5>
			<hr class="FEP-hr">
			<p class="card-text">
				현업 개발에 있어서 메모리 누수를 해결하지 않는다면 메모리 사용량이 증가되면서 시스템의 메모리가 부족해 운영체제가 프로그램을 강제 종료시키는 등의 문제가 발생한다. 때문에 메모리 정리에 중요성을 인식하고 있는지, 또한 메모리 정리의 중요 Point인 Garbage Collection을 이해하고 있는지 묻는 질문이다.
			</p>
			<h5 class="card-title FEP-subHeading">만점 답안</h5>
			<hr class="FEP-hr">
			<p class="card-text">
				메모리를 직접 관리하게 되는 경우 여러 애로 사항이 있는데, 첫 번째는 필요없는 메모리를 해제하지 않는 경우 메모리 누수로 이어지고 이러한 누수가 누적되면 치명적인 문제가 된다는 것입니다. 두 번째는 사용 중인 메모리를 잘못 중단하게 되면, 중요 데이터의 일부가 손상될 수 있다는 것입니다.
			</p>
		</div>
	</div>
</div>
<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chevron-right FEP-arrow" viewBox="0 0 16 16">
	<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>
</div>
`

const OFMPage = `
<div class="OFMP-title">
			<p class="h1 OFMP-h1">Only For Me</p>
		</div>
		<div class="OFMP-cardGroup">
			<div class="card text-center OFMP-container">
				<div class="card-header OFMP-cardHeader">
					<p>난이도 : 하</p>
					<img src="./assets/dist/images/star.png" class="OFMP-star" alt="빈 별">
				</div>
				<div class="card-body OFMP-cardBody">
					<div class="OFMP-cardContent">
						<p class="card-text">
							Python 메모리 관리 기법에 대해 설명해 보세요.
						</p>
						<h5 class="card-title OFMP-subHeading">질문 의도</h5>
						<hr class="OFMP-hr">
						<p class="card-text">
							현업 개발에 있어서 메모리 누수를 해결하지 않는다면 메모리 사용량이 증가되면서 시스템의 메모리가 부족해 운영체제가 프로그램을 강제 종료시키는 등의 문제가 발생한다. 때문에 메모리 정리에 중요성을 인식하고 있는지, 또한 메모리 정리의 중요 Point인 Garbage Collection을 이해하고 있는지 묻는 질문이다.
						</p>
						<h5 class="card-title OFMP-subHeading">만점 답안</h5>
						<hr class="OFMP-hr">
						<p class="card-text">
							메모리를 직접 관리하게 되는 경우 여러 애로 사항이 있는데, 첫 번째는 필요없는 메모리를 해제하지 않는 경우 메모리 누수로 이어지고 이러한 누수가 누적되면 치명적인 문제가 된다는 것입니다. 두 번째는 사용 중인 메모리를 잘못 중단하게 되면, 중요 데이터의 일부가 손상될 수 있다는 것입니다.
						</p>
					</div>
				</div>
			</div>
			<div class="card text-center OFMP-container">
				<div class="card-header OFMP-cardHeader">
					<p>난이도 : 하</p>
					<img src="./assets/dist/images/star.png" class="OFMP-star" alt="빈 별">
				</div>
				<div class="card-body OFMP-cardBody">
					<div class="OFMP-cardContent">
						<p class="card-text">
							Python 메모리 관리 기법에 대해 설명해 보세요.
						</p>
						<h5 class="card-title OFMP-subHeading">질문 의도</h5>
						<hr class="OFMP-hr">
						<p class="card-text">
							현업 개발에 있어서 메모리 누수를 해결하지 않는다면 메모리 사용량이 증가되면서 시스템의 메모리가 부족해 운영체제가 프로그램을 강제 종료시키는 등의 문제가 발생한다. 때문에 메모리 정리에 중요성을 인식하고 있는지, 또한 메모리 정리의 중요 Point인 Garbage Collection을 이해하고 있는지 묻는 질문이다.
						</p>
						<h5 class="card-title OFMP-subHeading">만점 답안</h5>
						<hr class="OFMP-hr">
						<p class="card-text">
							메모리를 직접 관리하게 되는 경우 여러 애로 사항이 있는데, 첫 번째는 필요없는 메모리를 해제하지 않는 경우 메모리 누수로 이어지고 이러한 누수가 누적되면 치명적인 문제가 된다는 것입니다. 두 번째는 사용 중인 메모리를 잘못 중단하게 되면, 중요 데이터의 일부가 손상될 수 있다는 것입니다.
						</p>
					</div>
				</div>
			</div>
			<div class="card text-center OFMP-container">
				<div class="card-header OFMP-cardHeader">
					<p>난이도 : 하</p>
					<img src="./assets/dist/images/star.png" class="OFMP-star" alt="빈 별">
				</div>
				<div class="card-body OFMP-cardBody">
					<div class="OFMP-cardContent">
						<p class="card-text">
							Python 메모리 관리 기법에 대해 설명해 보세요.
						</p>
						<h5 class="card-title OFMP-subHeading">질문 의도</h5>
						<hr class="OFMP-hr">
						<p class="card-text">
							현업 개발에 있어서 메모리 누수를 해결하지 않는다면 메모리 사용량이 증가되면서 시스템의 메모리가 부족해 운영체제가 프로그램을 강제 종료시키는 등의 문제가 발생한다. 때문에 메모리 정리에 중요성을 인식하고 있는지, 또한 메모리 정리의 중요 Point인 Garbage Collection을 이해하고 있는지 묻는 질문이다.
						</p>
						<h5 class="card-title OFMP-subHeading">만점 답안</h5>
						<hr class="OFMP-hr">
						<p class="card-text">
							메모리를 직접 관리하게 되는 경우 여러 애로 사항이 있는데, 첫 번째는 필요없는 메모리를 해제하지 않는 경우 메모리 누수로 이어지고 이러한 누수가 누적되면 치명적인 문제가 된다는 것입니다. 두 번째는 사용 중인 메모리를 잘못 중단하게 되면, 중요 데이터의 일부가 손상될 수 있다는 것입니다.
						</p>
					</div>
				</div>
			</div>
			<div class="card text-center OFMP-container">
				<div class="card-header OFMP-cardHeader">
					<p>난이도 : 하</p>
					<img src="./assets/dist/images/star.png" class="OFMP-star" alt="빈 별">
				</div>
				<div class="card-body OFMP-cardBody">
					<div class="OFMP-cardContent">
						<p class="card-text">
							Python 메모리 관리 기법에 대해 설명해 보세요.
						</p>
						<h5 class="card-title OFMP-subHeading">질문 의도</h5>
						<hr class="OFMP-hr">
						<p class="card-text">
							현업 개발에 있어서 메모리 누수를 해결하지 않는다면 메모리 사용량이 증가되면서 시스템의 메모리가 부족해 운영체제가 프로그램을 강제 종료시키는 등의 문제가 발생한다. 때문에 메모리 정리에 중요성을 인식하고 있는지, 또한 메모리 정리의 중요 Point인 Garbage Collection을 이해하고 있는지 묻는 질문이다.
						</p>
						<h5 class="card-title OFMP-subHeading">만점 답안</h5>
						<hr class="OFMP-hr">
						<p class="card-text">
							메모리를 직접 관리하게 되는 경우 여러 애로 사항이 있는데, 첫 번째는 필요없는 메모리를 해제하지 않는 경우 메모리 누수로 이어지고 이러한 누수가 누적되면 치명적인 문제가 된다는 것입니다. 두 번째는 사용 중인 메모리를 잘못 중단하게 되면, 중요 데이터의 일부가 손상될 수 있다는 것입니다.
						</p>
					</div>
				</div>
			</div>
		</div>
`

const $main = document.querySelector('.main');
const $navBE = document.querySelector('.nav-BE');
const $navFE = document.querySelector('.nav-FE');
const $navOFM = document.querySelector('.nav-OFM');

console.log($navOFM);

// 클릭 시 BE Cheat Sheet 페이지로 이동
pageRenderByButton($navBE, () => {
	pageRender(BEPage);
});

// 클릭 시 FE Cheat Sheet 페이지로 이동
pageRenderByButton($navFE, () => {
	pageRender(FEPage);
});

// 클릭 시 Only For Me 페이지로 이동
pageRenderByButton($navOFM, () => {
	pageRender(OFMPage);
});

function pageRender(page) {
	$main.innerHTML = page;
}

function pageRenderByButton(btn, renderFunction) {
	btn.addEventListener('click', () => {
		renderFunction();
	});
}

// 메인 화면, 경력 선택 페이지 렌더링 메서드
function firstPageRender() {
	pageRender(firstPage);

	const $careerSelectBtn = $main.querySelectorAll('.career-select-btn');
	$careerSelectBtn.forEach((btn) => {
		pageRenderByButton(btn, jobSelectPageRender);
	});

};

// 직무 선택 페이지 렌더링 메서드
function jobSelectPageRender() {

	pageRender(jobSelectPage);

	const $jobSelectBtn = $main.querySelectorAll('.job-select-btn');
	$jobSelectBtn.forEach((btn) => {
		pageRenderByButton(btn, interviewStartPageRender);
	})

	const $homeBtn = $main.querySelector('.pre-btn')
	pageRenderByButton($homeBtn, firstPageRender);
}

// 모의 면접 시작 페이지 렌더링 메서드
function interviewStartPageRender() {
	pageRender(interviewStartPage);

	const $jobSelectBtns = $main.querySelectorAll('.job-select-btn');
	$jobSelectBtns.forEach((btn) => {
		pageRenderByButton(btn, jobSelectPageRender);
	});

	const $interViewStartBtn = $main.querySelector('.interview-start-btn');
	pageRenderByButton($interViewStartBtn, interviewPageRender);
}

// 모의 면접 문제 페이지 렌더링 메서드
function interviewPageRender() {
	pageRender(interviewPage);

	const $submitBtn = $main.querySelector('.submit-btn');
	pageRenderByButton($submitBtn, resultPageRender);
}

// 모의 면접 단위 결과 페이지 렌더링
function resultPageRender() {
	pageRender(resultPage);

	// 즐겨찾기 별 변경
	const $rPStar = $main.querySelector('.rP-star');
	$rPStar.addEventListener('click', () => {
		starSrc = $rPStar.getAttribute('src')
		if (starSrc.includes('empty-star.png')) {
			$rPStar.setAttribute('src', "./assets/dist/images/star.png");
		} else {
			$rPStar.setAttribute('src', "./assets/dist/images/empty-star.png");
		}
	})

	// 다음 문제 버튼
	const $nextBtn = $main.querySelector('.rP-nextBtn')
	pageRenderByButton($nextBtn, interviewPageRender);
}

function changeStar() {

}

firstPageRender();