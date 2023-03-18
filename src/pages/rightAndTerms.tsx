import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"
import type { HeadFC, PageProps } from "gatsby"

const textStyles = {
  fontSize: "80%",
  textIndent: "1em",
  textAlign: "left",
}
const imageStyles = {
  width: "30%",
  minWidth: "200px",
  height: "30%",
  margin: "1rem auto",
}

const IndexPage: React.FC<PageProps> = () => {
  const one = 1;
  return (
    <Layout>
      <h2>
        権利表記・利用者への宣言
      </h2>
      <p style={textStyles}>
        全ての記載/発言/行動/行動の結果は、個人の見解と責任による結果であり、所属組織を代表するものではありません。このサイトはもちろん、このサイト以外の全ての私についても前述の通りです。
      </p>

      <p style={textStyles}>
        記載・表示されている会社名・商品名は、それぞれ各社の商標および登録商標です。
      </p>

      <p style={textStyles}>
        このサイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。このGoogleアナリティクスはデータの収集のためにCookieを使用しています。このデータは匿名で収集されており、個人を特定するものではありません。この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関しての詳細は<a href="https://www.google.com/analytics/terms/jp.html">Google アナリティクス利用規約</a>や<a href="https://www.google.com/intl/ja/policies/privacy/partners/">Google ポリシーと規約</a>をご覧ください。
      </p>

      <p style={textStyles}>
        Amazonのアソシエイトとして、私は適格販売により収入を得ています。Amazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazonアソシエイト・プログラムの参加者です。
      </p>

      <p style={textStyles}>
        法令に基づく例外、関係者の安全に関する事項、運用を阻害する事項を除き、第三者へのデータ開示は行いません。ただし、統計的に処理された、個人を特定できない状態のデータについては、開示することがあります。
      </p>

      <p style={textStyles}>
        このサイトで提供する内容について、瑕疵やバグがないことは保証していません。データの正確性には責任を持ちません。また、このサイトを利用して発生したいかなる損害についても責任を負いません。
      </p>

      <p style={textStyles}>
        下記に示すランタンが「私が気に入っているランタンである」ことを宣言します。この文章は、真面目な文章が続くとふざけたことを書きたくなる性格であることを示しており、特に意味はありません。E.Thomas & Williams のカンブリアンランタンです。明るさはロウソクと同じようなものなので実用上のメリットはほぼありませんが、この存在自体が私を穏やかに高揚させます。
      </p>
      <div style={imageStyles}>
       <StaticImage src="../images/lanthanum.jpeg" alt="my favorite lanthanum"/>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>watahari.com</title>
