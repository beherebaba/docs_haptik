const React = require('react');
const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function Section({ title, description, ctaText, ctaLink }) {
  return (
    <div className="home-row-section">
      <div className="home-row-section-title">{title}</div>
      <div className="home-row-section-description">{description}</div>
      <a href={ctaLink} className="home-row-section-cta">
        {ctaText}
      </a>
    </div>
  );
}

function Row({ title, sections = [], others = [], id }) {
  return (
    <div className="home-row-wrapper">
      <div className="home-row-anchor" id={id} />
      <div className="home-row">
        <div className="home-row-title">{title}</div>
        <div className="home-row-columns">
          <div className="home-row-sections column">
            {sections.map((section, i) => (
              <Section key={i} {...section} />
            ))}
          </div>
          {others.length ? (
            <div className="home-row-others column">
              <React.Fragment>
                <div className="home-row-others-title">Other</div>
                <div className="home-row-others-links">
                  {others.map(({ url, title }, i) => (
                    <a key={i} href={url}>
                      {title}
                    </a>
                  ))}
                </div>
              </React.Fragment>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

module.exports = () => (
  <div className="home">
    <Row
      id="tools"
      title="Tools"
      sections={[
        {
          title: 'Bot Builder',
          description:
            'Everything required to get you from beginner to advanced in Bot Building & Development.',
          ctaText: 'Learn More',
          ctaLink: '/bot-builder/basic/introduction'
        },
        {
          title: 'Live Chat',
          description: 'Manage and plan your chat work with these resources & guides',
          ctaText: "Let's Begin",
          ctaLink: '/agent-chat'
        },
        {
          title: 'Analytics',
          description: 'Learn how to uncover hidden insghts in your chat data & communication',
          ctaText: 'Get Started',
          ctaLink: '/bot-analytics'
        }
      ]}
      others={[
        {
          title: 'Security',
          url: '/other/security'
        },
        {
          title: 'Support',
          url: '/other/support'
        },
        {
          title: 'SLA',
          url: '/other/sla'
        }
      ]}
    />
    <Row
      id="integrations"
      title="Integrations"
      sections={[
        {
          title: 'iOS SDK',
          description: 'Objective-C framework to bring the chatbot magic in your app for iOS 9 & higher',
          ctaText: 'Get Started',
          ctaLink: 'https://hellohaptik.github.io/haptik-ios-framework'
        },
        {
          title: 'Android SDK',
          description:
            'Java framework to supercharge your Android app with AI powered chatbot capabilities',
          ctaText: 'Get Started',
          ctaLink: 'https://hellohaptik.github.io/haptik-android-lib'
        },
        {
          title: 'Web SDK',
          description: 'Supercharge your app with AI powered Chatbots enabled by our powerful Javascript SDK',
          ctaText: 'Get Started',
          ctaLink: 'https://hellohaptik.github.io/javascript_sdk/'
        },
        {
          title: 'Webhooks',
          description:
            'API docs to help you build powerful chatbot solutions with great customisations',
          ctaText: 'Get Started',
          ctaLink: '/webhooks'
        }
      ]}
      others={[
        {
          title: 'HSL',
          url: '/hsl'
        },
        {
          title: 'Facebook',
          url: '/other/facebook'
        },
        {
          title: 'Cordova',
          url: 'https://hellohaptik.github.io/javascript_sdk/cordova-integration'
        },
        {
          title: 'React Native',
          url: 'https://hellohaptik.github.io/javascript_sdk/native-support'
        }
      ]}
    />
  </div>
);
