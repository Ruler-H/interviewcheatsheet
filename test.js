// 3번째 실습
let url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;

data = [{
	"role": "system",
	"content": "assistant는 Senior BackEnd 기술 면접 전문가이다."
},{
	"role": "user",
	"content": "어떠한 경우에 인덱스를 사용하는 것이 유리한가요?라는 질문에 인덱스는 잘모르겠습니다.라고 답하면 10점 만점에 몇점인지 소수점까지 알려줘"
}]

fetch(url, {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
	},
	body: JSON.stringify(data),
	redirect: "follow",
}).then((res) => res.json()
).then((res) => {
	console.log(res.choices[0].message.content);
}).catch((err) => {
	console.log(err);
});