var songBlocks = document.querySelectorAll('.playlist-card');
songBlocks.forEach(function (block, index) {
  block.addEventListener('click', function () {
    switch (index) {
      case 0:
        alert('每个人都会有自己想要守护的东西，那我呢？');
        break;
      case 1:
        alert('情感是刺客的第一大忌');
        break;
      case 2:
        alert('我今天就要带她走，我看谁敢拦我');
        break;
	  case 3:
        alert('魔刀碎千刃，重铸七封神！');
        break;
	  case 4:
        alert('刺客守则第三条，任务之外，他人之事，绝不出手');
        break;
	  case 5:
        alert('你们人类让我明白了一个道理，那就是这个世界是不讲道理的');
        break;
	  case 6:
        alert('亲了可就是我的人了，给个面子，不许破坏这个岛');
        break;
      default:
        alert('我只知道，你不说出来，对方就永远不会知道你的心意');
        break;
    }
  });
});