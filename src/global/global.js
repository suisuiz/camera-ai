const algorithm = process.env.VUE_APP_ALGORITHM
const appConfig = {
  smoke: {
    name: '火灾监测',
    algorithm: 'smoke',
    left: '一键拨打119',
    tel: 119,
    right: '解除警报'
  },
  Object: {
    name: '宠物抓拍',
    algorithm: 'Object',
    tel: ''
  },
  PeopleFall: {
    name: '摔倒检测',
    algorithm: 'PeopleFall',
    left: '一键拨打120',
    tel: 120,
    right: '解除警报'
  },
  Intrusion: {
    name: '入侵监测',
    algorithm: 'Intrusion',
    left: '一键拨打110',
    tel: 110,
    right: '解除警报'
  }
}

const guideData = {
  smoke: {
    version: '1.0.3',
    updateTime: '2023-01-03',
    introduce:
      '这是一款摄像头算法轻应用，可在平台上部署摄像头烟火检测算法，当检测到火灾隐患时。可通过家中其他设备，进行火灾报警警告。还可通过手机通知用户，用户可以通过手机查看家中画面、自动报警等。保护用户家中财产安全。'
  },

  Object: {
    version: '1.0.3',
    updateTime: '2023-01-03',
    introduce: '这是一款摄像头算法轻应用，可在平台上部署摄像头宠物抓拍识别算法，当检测到镜头内有宠物移动时，摄像头会自动抓取精彩画面，生成精彩视频图集或精彩延时视频，替用户收藏爱宠的每一个精彩瞬间。'
  },

  PeopleFall: {
    version: '1.0.3',
    updateTime: '2023-01-03',
    introduce: '这是一款摄像头算法轻应用，可在平台上部署摄像头摔倒识别算法，当检测到镜头内有人摔倒时，可通过手机向用户告警，用户可以一键拨打120进行医疗求助，保护家中老人健康安全。'
  },

  Intrusion: {
    version: '1.0.3',
    updateTime: '2023-01-03',
    introduce: '这是一款摄像头算法轻应用，可在平台上部署摄像头入侵警告算法，当检测到有陌生人入侵时，可通过手机向用户告警，用户可以一键拨打110进行报警，保护用户家中财产安全。'
  }
}

const requestConfig = {
  appId: '31963316003316',
  knownAppId: '31963316003316',
  dev: true
}

// ?token=PAQ05lS055ipwpvaBT6exgAtKk%2FuDbk03TZz2kiObLzwudgVYgB8&appId=3196331600&cId=974259836

const app = appConfig[algorithm]
export default {
  appConfig: app,
  guideData,
  requestConfig
}
