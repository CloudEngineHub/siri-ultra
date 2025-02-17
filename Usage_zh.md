# Siri Ultra 使用手册

## 产品介绍
Siri Ultra 是一个能在 iPhone 上使用的 AI 聊天快捷指令，无需下载任何 App，即可体验到最新的大模型。

## 核心功能
- 通过 Siri 实时语音对话，也可以直接运行快捷指令进行文字对话
- 兼容各种大模型，包括 OpenAI、Gemini、DeepSeek 等
- 支持联网搜索（需单独配置搜索 key）
- 支持网页总结 （链接发给快捷指令即可）

## 快速开始
1. 安装快捷指令
   - 点击 [Siri Ultra](https://s.search1api.com/siriultra006) 下载并添加到 iPhone

2. 基础配置
   - 打开快捷指令
   - 配置必要参数：
     - API Key
     - API Base URL
     - Model
   - 将快捷指令重命名为你喜欢的名字，比如 Siri Ultra

3. 开始使用
   - 语音模式：说 "Hey Siri" 后念出你设置的快捷指令名字，比如 Siri Ultra
   - 文字模式：直接运行快捷指令

## 常见模型配置参考示例(API Key 请填写自己真实的)
| 厂商 | API Key | API Base | Model | 备注 | 
| --- | --- | --- | --- | --- | 
| [Search1API](https://www.search1api.com/)| xxxxxxxxxxxxxxx | https://api.search1api.com/v1 | deepseek-r1-70b-fast-online | API 直接支持联网，速度快，支持不同版本的 DeepSeek R1，无需科学上网 |
| [Groq](https://console.groq.com/login) | gsk_rxxxxxxxxxxx | https://api.groq.com/openai/v1 | deepseek-r1-distill-llama-70b | 速度快，有免费额度，支持 DeepSeek R1 模型，需要科学上网 |
| OpenAI| sk-xxxxxxxxxxxxx | https://api.openai.com/v1 | gpt-4o-mini | 速度快，API 付费难度较大 | 
| Google| AIzaSxxxxxxxxxxx | https://generativelanguage.googleapis.com/v1beta/openai | gemini-2.0-flash | 速度快，有免费额度，支持 Gemini 模型，需要科学上网 |
| DeepSeek| sk-xxxxxxxxxxxxx |     https://api.deepseek.com/v1 | deepseek-reasoner | 速度慢，免费用户当前几乎无法使用 |
| 硅基流动| sk-xxxxxxxxxxxxx | https://api.siliconflow.cn/v1 | deepseek-ai/DeepSeek-R1-Distill-Llama-70B | 速度慢，免费用户当前几乎无法使用 |
| OpenRouter| sk-xxxxxxxxxxxx | https://openrouter.ai/api/v1 | deepseek/deepseek-r1-distill-llama-70b:free | 速度一般，有免费额度，支持 DeepSeek R1 模型，无需科学上网 |

## 常见问题解答

### 1. 快捷指令无法下载
- 请确保已升级到最新的 iOS 版本
- 旧版本 iOS 暂不支持，后续会适配

### 2. API Key 怎么获取
- API Key 需要在各大模型服务商网站申请
- 如果是想用 DeepSeek，推荐使用 [Search1API](https://www.search1api.com/) 
  - API 支持联网
  - 速度快，无需科学上网
  - 支持不同版本的 DeepSeek R1

### 3. 为什么不能联网
- 选择 Search1API 的 DeepSeek 模型时，API 直接支持联网，或者你可以
  - 选择其他支持 tool call 的模型（DeepSeek R1 目前仅有 Groq 支持）
  - 配置搜索 key（在选项 5 中设置）
    - 使用 [Search1API](https://www.search1api.com/)（付费服务）

### 4. 为什么没有声音
默认对话方式：
- 通过 Siri 唤起后，直接语音对话（如果 Siri 本身没有声音，请检查 Siri 语音回答，是否是自动或者首选语音回答）
- 点击直接运行快捷指令，文字对话

如果你不希望通过 Siri 唤起，希望直接运行时启用语音：
1. 将选项 6 设置为 "no"
2. 在听写文本、朗读这两个节点选择对应语言

### 5. 为什么看不到推理过程
- 推理过程文字较长，不适合在快捷指令中展示，已经隐藏，但是模型支持，是仍然会进行推理的，不会影响结果