import type { Metadata } from "next";
import Link from "next/link";
import { LP2_WRAP } from "@/components/lp2/ui";
import "../lp2.css";

export const metadata: Metadata = {
  title: "Privacy Policy | Fume.Fit",
  description:
    "How FUME SHREDDING HUB PRIVATE LIMITED collects, uses, and protects information on www.fume.fit.",
};

const purposes = [
  {
    title: "To personalize user experience",
    body: "We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.",
  },
  {
    title: "To improve our Site",
    body: "We continually strive to improve our website offerings based on the information and feedback we receive from you.",
  },
  {
    title: "To improve customer service",
    body: "Your information helps us to more effectively respond to your customer service requests and support needs.",
  },
  {
    title: "To send periodic emails",
    body: "The email address Users provide will only be used to respond to their inquiries, and/or other requests or questions.",
  },
] as const;

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-[17px] font-extrabold tracking-tight text-[var(--lp2-ink)] sm:text-[18px]">
        {title}
      </h2>
      <div className="lp2-body-text space-y-3 text-[14px] leading-[1.75]">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <div className="lp2-root">
      <main className={`${LP2_WRAP} py-12 sm:py-16 lg:py-20`}>
        <nav className="lp2-body-text text-[12px] font-semibold tracking-wide">
          <Link href="/" className="transition-colors hover:text-[var(--lp2-violet)]">
            Home
          </Link>
          <span className="mx-2 text-[var(--lp2-line)]">/</span>
          <span className="text-[var(--lp2-ink)]">Privacy Policy</span>
        </nav>

        <h1 className="lp2-h2 mt-6 max-w-3xl">
          Privacy <span className="lp2-accent">Policy</span>
        </h1>

        <p className="lp2-body-text mt-5 max-w-3xl text-[14px] leading-[1.75] sm:text-[15px]">
          This Privacy Policy governs the manner in which this blog collects, uses,
          maintains and discloses information collected from users (each, a
          &ldquo;User&rdquo;) of the www.fume.fit website (&ldquo;Site&rdquo;). This
          privacy policy applies to the Site and all products and services offered by
          FUME SHREDDING HUB PRIVATE LIMITED.
        </p>

        <div className="mt-10 max-w-3xl space-y-10">
          <Section title="Personal identification information">
            <p>
              We may collect personal identification information from Users in a
              variety of ways, including, but not limited to, when Users visit our
              site, register on the site, and in connection with other activities,
              services, features or resources we make available on our Site. Users
              may be asked for, as appropriate, name, email address, mailing address,
              phone number. Users may, however, visit our Site anonymously. We will
              collect personal identification information from Users only if they
              voluntarily submit such information to us. Users can always refuse to
              supply personally identification information, except that it may
              prevent them from engaging in certain Site related activities.
            </p>
          </Section>

          <Section title="Non-personal identification information">
            <p>
              We may collect non-personal identification information about Users
              whenever they interact with our Site. Non-personal identification
              information may include the browser name, the type of computer and
              technical information about Users means of connection to our Site, such
              as the operating system and the Internet service providers utilized and
              other similar information.
            </p>
          </Section>

          <Section title="Web browser cookies">
            <p>
              Our Site may use &ldquo;cookies&rdquo; to enhance User experience.
              User&apos;s web browser places cookies on their hard drive for
              record-keeping purposes and sometimes to track information about them.
              User may choose to set their web browser to refuse cookies, or to alert
              you when cookies are being sent. If they do so, note that some parts of
              the Site may not function properly.
            </p>
          </Section>

          <Section title="How we use collected information">
            <p>
              FUME SHREDDING HUB PRIVATE LIMITED collects and uses Users personal
              information for the following purposes:
            </p>
            <ul className="space-y-4 pl-0">
              {purposes.map((item) => (
                <li
                  key={item.title}
                  className="relative rounded-2xl border border-[var(--lp2-line)] bg-white px-4 py-3.5 pl-5 shadow-[0_1px_2px_rgba(10,10,11,0.04)]"
                >
                  <p className="font-extrabold text-[var(--lp2-ink)]">
                    {item.title}
                  </p>
                  <p className="mt-1.5">{item.body}</p>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="How we protect your information">
            <p>
              We adopt appropriate data collection, storage and processing practices
              and security measures to protect against unauthorized access,
              alteration, disclosure or destruction of your personal information,
              username, password, transaction information and data stored on our
              Site.
            </p>
          </Section>

          <Section title="Sharing your personal information">
            <p>
              We do not sell, trade, or rent Users personal identification
              information to others. We may share generic aggregated demographic
              information not linked to any personal identification information
              regarding visitors and users with our business partners, trusted
              affiliates and advertisers for the purposes outlined above.
            </p>
          </Section>

          <Section title="Advertising">
            <p>
              Ads appearing on our site may be delivered to Users by advertising
              partners, who may set cookies. These cookies allow the ad server to
              recognize your computer each time they send you an online advertisement
              to compile non personal identification information about you or others
              who use your computer. This information allows ad networks to, among
              other things, deliver targeted advertisements that they believe will be
              of most interest to you. This privacy policy does not cover the use of
              cookies by any advertisers.
            </p>
          </Section>

          <Section title="Google Adsense">
            <p>
              Some of the ads may be served by Google. Google&apos;s use of the DART
              cookie enables it to serve ads to Users based on their visit to our
              Site and other sites on the Internet. DART uses &ldquo;non personally
              identifiable information&rdquo; and does NOT track personal information
              about you, such as your name, email address, physical address, etc. You
              may opt out of the use of the DART cookie by visiting the{" "}
              <a
                href="http://www.google.com/privacy_ads.html"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[var(--lp2-violet)] underline-offset-2 hover:underline"
              >
                Google ad and content network privacy policy
              </a>
              .
            </p>
          </Section>

          <Section title="Changes to this privacy policy">
            <p>
              FUME SHREDDING HUB PRIVATE LIMITED has the discretion to update this
              privacy policy at any time. When we do, we will post a notification on
              the main page of our Site, revise the updated date at the bottom of
              this page. We encourage Users to frequently check this page for any
              changes to stay informed about how we are helping to protect the
              personal information we collect. You acknowledge and agree that it is
              your responsibility to review this privacy policy periodically and
              become aware of modifications.
            </p>
          </Section>

          <Section title="Your acceptance of these terms">
            <p>
              By using this Site, you signify your acceptance of this policy. If you
              do not agree to this policy, please do not use our Site. Your continued
              use of the Site following the posting of changes to this policy will be
              deemed your acceptance of those changes.
            </p>
          </Section>

          <Section title="Contacting us">
            <p>
              If you have any questions about this Privacy Policy, the practices of
              this site, or your dealings with this site, please contact us at:
            </p>
            <address className="not-italic">
              <p className="font-extrabold text-[var(--lp2-ink)]">
                FUME SHREDDING HUB PRIVATE LIMITED
              </p>
              <p className="mt-2">
                1st floor, 677, Sector 1, 27th Main, 13th Cross, Sector 1, HSR
                Layout, Bengaluru (Bangalore) Urban, Karnataka, 560102.
              </p>
            </address>
          </Section>

          <p className="lp2-meta pt-2">
            This document was last updated on 27th June, 2022
          </p>
        </div>

        <Link href="/" className="lp2-btn mt-12 inline-flex">
          <span>Back to home</span>
        </Link>
      </main>
    </div>
  );
}
