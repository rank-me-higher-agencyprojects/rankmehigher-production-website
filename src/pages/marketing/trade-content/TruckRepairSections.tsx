import { Link } from "react-router-dom";
import { Bullets, Section } from "@/components/marketing/MarketingLayout";
import { PORTFOLIO, type Trade } from "@/lib/marketing-data";

/**
 * Long-form body for /websites-for/truck-repair/.
 * Other trades keep the short template in TradePage until they grow a body of their own.
 */
const TruckRepairSections = ({ trade }: { trade: Trade }) => {
  const examples = PORTFOLIO.filter((p) => trade.examples.includes(p.name));

  return (
    <>
      <Section id="why-truck-repair" title="Why a truck repair shop website is different">
        <div className="max-w-3xl space-y-4 leading-relaxed">
          <p>
            The search is a decision, and the decision is short. What the shop works on. Whether it is open right now. Whether a truck can get into the yard and park. Which exit gets a driver there without a U-turn on a local street. A homepage that leads with a slogan and hides the number fails that list. So does a page written like a passenger-car garage: oil changes, a waiting room, and a coupon, and nothing about bays, trailers, or DOT inspections.
          </p>
          <p>
            Fleet work and a one-off repair are different visits. An owner-operator with a check-engine light wants to know that you diagnose diesel engines and how to reach a person now. A company that runs trucks on a schedule wants a fleet page: what maintenance you take and who should receive the request. The page a dispatcher opens should be about fleet maintenance. The page a driver opens for brakes should be about brakes. Publish a page only for work the shop actually performs.
          </p>
          <p>
            Hours have to be the hours on the door. A shop that opens at 7, a shop that takes DOT inspections on Saturday, and a shop that is closed Thanksgiving all have to say so. A holiday still listed as a normal Monday sends someone to a locked gate. Truck parking, the highway exit, and an after-hours note belong on the location page.
          </p>
          <p>
            A page someone can use on a phone, a number they can tap, and hours that match the door are what{" "}
            <Link to="/blog/service-business-website-tips/" className="text-primary underline underline-offset-4">any service business site needs</Link>.
          </p>
          <p>
            Name the exit. Say whether a tractor and a trailer can park on the lot, or whether the trailer has to be dropped first. If the shop does not run roadside or mobile service, say that, so nobody waits on the shoulder for a truck you are not sending.
          </p>
        </div>
      </Section>

      <Section id="what-the-ai-builds" title="What the AI builds for a diesel shop">
        <div className="max-w-3xl space-y-4 leading-relaxed">
          <p>
            You answer 6 questions about the shop. The AI researches the market, plans the pages, writes them, and builds the site in minutes, not weeks. The live preview arrives by text. You see the whole site before you pay anything. The build is free, and you pay when you claim it and put it on your domain. What each plan includes is on the{" "}
            <Link to="/pricing/" className="text-primary underline underline-offset-4">pricing page</Link>.
            How a site is produced for any local business is on the{" "}
            <Link to="/services/websites/" className="text-primary underline underline-offset-4">AI-built websites</Link>{" "}
            page.
          </p>
          <p>
            The preview is a set of pages, not one long homepage. The form should ask for the job: what the truck is doing, how urgent it is, and how many trucks if this is a fleet.
          </p>
          <Bullets items={trade.pages} />
          <p>
            The phone number is the shop's number, written the same way on every page. The hours are the hours you gave. The photos should be the lot and the bays. A stock photo of a person in a hard hat does not show that the yard can take a tractor and a trailer. You can replace a photo later from your phone.
          </p>
        </div>
      </Section>

      <Section id="truck-clinic" title="Truck Clinic, a live shop site in Romeoville">
        <div className="max-w-3xl space-y-4 leading-relaxed">
          <p>
            Truck Clinic is a live client site on Rank Me Higher. It is a commercial truck repair shop in Romeoville, just off I-55. Read the{" "}
            <Link to="/examples/#truck-clinic" className="text-primary underline underline-offset-4">Truck Clinic case study</Link>
            , or open the shop at{" "}
            <a href="https://truckclinic.com/" target="_blank" rel="noopener" className="text-primary underline underline-offset-4">
              truckclinic.com
            </a>
            .
          </p>
          {examples.length > 0 && (
            <div className="grid gap-5 sm:grid-cols-2">
              {examples.map((p) => (
                <figure key={p.name} className="overflow-hidden rounded-xl border border-white/[0.08]">
                  <img
                    src={p.img}
                    alt={`${p.name} website, truck repair in ${p.city}`}
                    loading="lazy"
                    decoding="async"
                    width={640}
                    height={400}
                    className="aspect-[16/10] w-full object-cover object-top"
                  />
                  <figcaption className="p-3 text-sm">
                    <span className="text-foreground">{p.name}</span> · {p.city}
                  </figcaption>
                </figure>
              ))}
            </div>
          )}
        </div>
      </Section>

      <Section id="edit-by-chat" title="Changes you make by chat">
        <div className="max-w-3xl space-y-4 leading-relaxed">
          <p>
            A Saturday DOT slot, a holiday closure, or a new lot photo should not wait on someone else's queue. Open the portal, click the part that changed, and say it the way you would text a person. The{" "}
            <Link to="/ai-website-editor/" className="text-primary underline underline-offset-4">AI website editor</Link>{" "}
            makes the change. Every edit is versioned, so you can revert it if the wording is wrong.
          </p>
          <p>These are the kinds of edits a truck shop actually sends:</p>
          <Bullets items={trade.jobs} />
          <div className="space-y-2 text-sm text-white/55">
            {trade.chatExamples.map((c) => (
              <p key={c} className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">{c}</p>
            ))}
          </div>
          <p>
            Hosting and SSL are included once the site is on your domain. What is included on each plan is on the{" "}
            <Link to="/pricing/" className="text-primary underline underline-offset-4">pricing page</Link>.
          </p>
        </div>
      </Section>

      <Section id="designer" title="A designer quote versus a site you edit yourself">
        <div className="max-w-3xl space-y-4 leading-relaxed">
          <p>
            A holiday, a new service, or a photo from the yard often waits on someone else's queue and gets billed again. The person who knows the hours is usually in the office or in a bay.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-white/[0.08] p-5">
              <h3 className="font-medium text-foreground">Hiring a designer for each change</h3>
              <div className="mt-3 text-sm">
                <Bullets
                  items={[
                    "A project quote before the first page exists",
                    "Another wait when hours, a service, or a photo changes",
                    "A login you may not touch for months",
                    "The exit, the parking, and Saturday DOT hours, easy to leave out",
                  ]}
                />
              </div>
            </div>
            <div className="rounded-xl border border-primary/40 p-5">
              <h3 className="font-medium text-foreground">On this platform</h3>
              <div className="mt-3 text-sm">
                <Bullets
                  items={[
                    "A full preview from a short set of questions about the shop",
                    "$99 a month when the site is live on your domain",
                    "Edits by chat, each one versioned so you can revert it",
                    "Service, fleet, and location pages in the first build",
                  ]}
                />
              </div>
            </div>
          </div>
          <p>
            You still own the site. Your photos, your words, and your domain go with you if you leave.
          </p>
        </div>
      </Section>

      <Section id="pricing" title="Pricing for a truck repair website">
        <div className="max-w-3xl space-y-4 leading-relaxed">
          <p>
            The build is free. The plan on this page is $99 a month, once the site is live on your domain. That is the website: hosting, SSL, lead capture with instant delivery, and the chat editor. No contract and no setup fee. You can cancel anytime.
          </p>
          <p>
            <Link to="/pricing/" className="text-primary underline underline-offset-4">See all plans</Link>{" "}
            for anything beyond the website. Items labeled Soon on that page are on the roadmap and are not automated in the portal today.
          </p>
        </div>
      </Section>

      <Section id="local-seo" title="Local SEO and the Google Business Profile">
        <div className="max-w-3xl space-y-4 leading-relaxed">
          <p>
            A shop shows up in local search as two things that have to match. The website is one. The Google Business Profile, the listing people see on Maps, is the other. If the site says one set of hours and the listing says another, drivers hit the same problem as an old phone number on the door.
          </p>
          <p>
            On the website, every page should carry the same name, address, and phone. JSON-LD lets a search engine read the business, the services, and the area. Hours should match the door, each service you offer gets a page, and the pages have to load on a phone. That checklist is{" "}
            <Link to="/services/seo/" className="text-primary underline underline-offset-4">how local search is built into the website</Link>.
          </p>
          <p>
            The profile half is{" "}
            <Link to="/localmapbooster/" className="text-primary underline underline-offset-4">LocalMapBooster</Link>.
            The shop keeps the number it already answers, on the site and on the listing. Our text line is how you reach us, and it is SMS only. Which plan includes what is on the{" "}
            <Link to="/pricing/" className="text-primary underline underline-offset-4">pricing page</Link>.
            Reviews on that listing start with{" "}
            <Link to="/blog/review-generation-strategies/" className="text-primary underline underline-offset-4">asking after the work is done</Link>
            , while the visit is still easy to remember.
          </p>
          <p>
            The on-site work is part of the website, not a monthly SEO retainer, and it does not guarantee a map position, a page-one placement, or a number of calls.
          </p>
        </div>
      </Section>

      <Section id="towns" title="Romeoville, and the towns next to it">
        <div className="max-w-3xl space-y-4 leading-relaxed">
          <p>
            The truck repair client we can point to is in Romeoville, in Will County, on the I-55 corridor. The{" "}
            <Link to="/locations/romeoville-il/" className="text-primary underline underline-offset-4">Romeoville page</Link>{" "}
            covers that area: the exits drivers use, truck parking and hours, and neighboring towns a shop there often also serves, Bolingbrook, Lockport, and Plainfield.
          </p>
          <p>
            This website does not publish a separate location URL for each of those towns. The site should describe the yard you have: one address, one set of hours, and the exits a driver can actually use. If you also take trucks from a neighboring town, say so. If you do not serve a town, leave it off.
          </p>
          <p>
            Rank Me Higher has offices in downtown Chicago, at 1 N State St, and in Mundelein. Truck Clinic's yard is in Romeoville. Those are different addresses. We build the website for the shop. Questions about the preview go to the{" "}
            <Link to="/contact/" className="text-primary underline underline-offset-4">contact page</Link>{" "}
            or to a text.
          </p>
        </div>
      </Section>
    </>
  );
};

export default TruckRepairSections;
