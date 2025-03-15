import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
// import { useBlogPosts } from '@docusaurus/plugin-content-blog/lib/client';

const FeatureList = [
  {
    title: "誰でも簡単に遊べる！",
    Svg: require('@site/static/img/undraw_my-location_plm0.svg').default, // アイコンを変更
    description: (
      <>
        スマホ1つで簡単に参加！<br/>
        Webアプリだから、インストール不要でアクセス可能。<br/>
        アカウントを作れば、すぐにゲームに参加できます！
      </>
    ),
  },
  {
    title: "広範囲で遊べる新感覚の鬼ごっこ！",
    Svg: require('@site/static/img/undraw_subway_66jh.svg').default,
    description: (
      <>
        街全体が鬼ごっこのフィールド！<br/>
        鉄道やバスを使って移動しながら遊ぶ、新しい鬼ごっこ体験。<br/>
        作戦を考え、鬼から逃げたり追い詰めたりしよう！
      </>
    ),
  },
  {
    title: "誰でもイベントを主催できる！",
    Svg: require('@site/static/img/undraw_ideas_41b9.svg').default,
    description: (
      <>
        ルールやミッションを考えて、自分だけの鬼ごっこを開催！<br/>
        友達と遊ぶもよし、大規模イベントを開くもよし！
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  // const blogPosts = useBlogPosts();

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>

      {/* <div>
        <h2>📝 最新のブログ</h2>
        <ul>
          {blogPosts.slice(0, 3).map(({ metadata }) => (
            <li key={metadata.permalink}>
              <a href={metadata.permalink}>{metadata.title}</a>
            </li>
          ))}
        </ul>
      </div> */}
    </section>
  );
}