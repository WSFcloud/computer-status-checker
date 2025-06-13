document.getElementById('checkStatusButton').addEventListener('click', () => {
	const statusMessage = document.getElementById('statusMessage');
	const loadingText = document.getElementById('loadingText');

	// 显示“正在检测”文字并清空状态消息
	loadingText.classList.remove('hidden');
	statusMessage.textContent = '';

	// 模拟检测过程
	setTimeout(() => {
		loadingText.classList.add('hidden');
		statusMessage.textContent = '恭喜！您的电脑已处于开机状态！';
	}, 2000); // 2秒后显示状态
});
