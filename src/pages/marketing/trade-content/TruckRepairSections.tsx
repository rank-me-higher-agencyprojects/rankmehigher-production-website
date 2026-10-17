import { Link } from "react-router-dom";
import { Bullets, Section } from "@/components/marketing/MarketingLayout";
import { CASE_STUDIES, PORTFOLIO, type Trade } from "@/lib/marketing-data";

/**
 * Long-form body for /websites-for/truck-repair/.
 * Other trades keep the short template in TradePage until they grow a body of their own.
 */
const TruckRepairSections = ({ trade }: { trade: Trade }) => {
  const examples = PORTFOLIO.filter((p) => trade.examples.includes(p.name));
  const clinic = CASE_STUDIES.find((c) => c.id === "truck-clinic");

  return (
    <>
      <Section id="why-truck-repair" title="Why a truck repair shop website is different">
        <div className="max-w-3xl space-y-4 leading-relaxed">
          <p>
            Websites for truck repair shops are not retail brochures with a phone number in the footer. The person searching usually has a truck that will not move. They are on a phone on the shoulder of I-55 or I-80, or they are a fleet manager who has to send a driver somewhere before the next dispatch. They are deciding whether to call. They are not browsing a gallery.
          </p>
          <p>
            That decision uses a short list. What do you work on. Are you open right now. Can a truck get into the yard and park. Which exit gets a driver there without a U-turn on a local street. A site that leads with a slogan and hides the number fails that list. So does a site written like a passenger-car garage: oil changes, a waiting room, and a coupon, with nothing about bays, trailers, or DOT inspections.
          </p>
          <p>
            Fleet work and a one-off repair are not the same visit, and a truck repair website has to show the difference. An owner-operator with a check-engine light wants to know that you diagnose diesel engines, what happens next, and how to reach a person now. A company that runs trucks on a schedule wants a fleet page: what maintenance you take, who should receive the request, and how that request gets to the shop in writing. Putting both jobs on one undifferentiated homepage makes each of them harder to find. The page a dispatcher opens should be about fleet maintenance. The page a driver opens for brakes should be about brakes.
          </p>
          <p>
            Hours have to be the hours on the door. A shop that opens at 7, a shop that takes DOT inspections on Saturday, and a shop that is closed Thanksgiving all have to say so. A holiday that is still listed as a normal Monday sends a driver to a locked gate with a truck that cannot wait. Truck parking, the highway exit, and an after-hours note belong on the location page because those are the facts people check before they roll a heavy truck into the lot. None of this is a ranking trick. It is the information the search was for.
          </p>
          <p>
            The services list should be the work you actually perform. Engine repair, brakes, DOT inspections, trailer repair, electrical, and diagnostics are the ordinary pages for a commercial shop. If you do not offer a service, do not publish a page for it. A driver who is towed in for work you do not do loses the afternoon and does not call again. Diesel repair website design on this platform starts there: a phone page that shows the number, the hours, and the job, so you can judge it on the preview before you pay anything.
          </p>
        </div>
      </Section>

      <Section id="what-the-ai-builds" title="What the AI builds for a diesel shop">
        <div className="max-w-3xl space-y-4 leading-relaxed">
          <p>
            You answer 6 questions about the shop. The AI researches the market, plans the pages, writes them, and builds the site in minutes, not weeks. The live preview arrives by text. You see the whole site before you pay anything. The build is free. You pay when you claim it and put it on your domain. What the plans include is on the{" "}
            <Link to="/pricing/" className="text-primary underline underline-offset-4">pricing page</Link>.
            How the website itself is produced, for any local business, is on the{" "}
            <Link to="/services/websites/" className="text-primary underline underline-offset-4">AI-built websites</Link>{" "}
            page: real photos where you have them, natural imagery only where a photo is missing, lead capture, hosting, and a portal where you edit by chat.
          </p>
          <p>
            For a truck shop, the preview is a set of pages rather than one long homepage. Each service you perform gets its own page, so the job and the way to ask for it are obvious. A fleet page is included when fleet accounts are part of the shop. The location page carries the yard, the exit, truck parking, and the hours. The quote or callback form texts the lead to you, which matters when a driver cannot stay on a call or a fleet office wants the request in writing.
          </p>
          <Bullets items={trade.pages} />
          <p>
            The phone number on those pages is the shop's number, written the same way on every page. The hours are the hours you gave, not a default schedule. The photos are the lot and the bays when you have them. A stock photo of a person in a hard hat does not tell a fleet manager that the yard can take a tractor and a trailer. If a photo is missing, the AI fills the gap with natural imagery that matches the trade. You can replace it later from your phone.
          </p>
          <p>
            The on-site local SEO in that first build is the same checklist every site on the platform ships with: name, address, and phone; JSON-LD; honest hours; and a page per service. Read the detail on the{" "}
            <Link to="/services/seo/" className="text-primary underline underline-offset-4">local SEO services</Link>{" "}
            page. Read this section as a scope. Rank Me Higher does not guarantee a map position, a page-one placement, or a number of calls. What you can inspect before you pay is the preview: the pages, the number, the hours, and the services.
          </p>
        </div>
      </Section>

      <Section id="truck-clinic" title="Truck Clinic, a live shop site in Romeoville">
        <div className="max-w-3xl space-y-4 leading-relaxed">
          <p>
            Truck Clinic is a live client site on Rank Me Higher. It is a commercial truck repair shop in Romeoville, just off I-55. The{" "}
            <Link to="/examples/#truck-clinic" className="text-primary underline underline-offset-4">Truck Clinic case study</Link>{" "}
            describes the business the way the shop's own site does: diesel engines, brakes, DOT inspections, trailer repair, and fleet maintenance. The case study also notes DPF cleaning among the service pages on that live site, listed the same way as the other repair pages.
          </p>
          <p>
            {clinic ? clinic.business : "Truck Clinic is a Romeoville commercial truck repair shop on the Rank Me Higher platform."}{" "}
            The case study, sourced from truckclinic.com, also describes what a visitor sees: a dedicated page for fleet repair, engine, transmission and differential, DOT inspections, trailer repair, brakes and suspension, electrical, and diagnostics, plus a way to request a written quote above the fold. Those are facts about the live site. They are not rankings, review totals, or revenue results, and this page does not add any.
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
          <p>
            You can read the full write-up on the{" "}
            <Link to="/examples/" className="text-primary underline underline-offset-4">examples page</Link>
            {clinic?.url ? (
              <>
                , or open the shop's site at{" "}
                <a href={clinic.url} target="_blank" rel="noopener" className="text-primary underline underline-offset-4">
                  truckclinic.com
                </a>
              </>
            ) : null}
            . A Romeoville shop that wants the same kind of build starts the same way as any other trade on the platform: a free preview, then $99 a month if you put the site on your domain. The case study is an example of the page structure. It is not a template of results you should expect.
          </p>
        </div>
      </Section>

      <Section id="edit-by-chat" title="Changes you make by chat">
        <div className="max-w-3xl space-y-4 leading-relaxed">
          <p>
            Shops change faster than a web project does. A Saturday DOT slot opens. Thanksgiving closes the yard. You add trailer repair. Someone finally takes a straight photo of the lot. The old way is an email to a web person and a wait, or a page builder you have to relearn. Here you open the portal, click the part that changed, and say it the way you would text a person. The{" "}
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
            What is live today is that editor, lead delivery by text, and hosting with SSL once the site is on your domain. Rankings in the portal, automatic Google Business Profile optimization, and review generation are labeled Soon. They are on the roadmap and they are not automated in the portal. A holiday banner is a chat edit you can do now.
          </p>
        </div>
      </Section>

      <Section id="designer" title="A designer quote versus a site you edit yourself">
        <div className="max-w-3xl space-y-4 leading-relaxed">
          <p>
            Hiring a web designer is a reasonable way to get a custom site. The friction shows up afterward. A small change, a holiday, a new service, a photo from the yard, waits on someone else's queue, and it is often billed again. A truck shop does not have a marketing department sitting on that queue. The person who knows the hours is usually in the office or in a bay.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-white/[0.08] p-5">
              <h3 className="font-medium text-foreground">Hiring a designer for each change</h3>
              <div className="mt-3 text-sm">
                <Bullets
                  items={[
                    "A project quote before the first page exists",
                    "Another wait when hours, a service, or a photo changes",
                    "A page builder or a login you may not touch for months",
                    "Local details, the exit, the parking, the Saturday DOT hours, easy to leave out of the original design",
                  ]}
                />
              </div>
            </div>
            <div className="rounded-xl border border-primary/40 p-5">
              <h3 className="font-medium text-foreground">On this platform</h3>
              <div className="mt-3 text-sm">
                <Bullets
                  items={[
                    "A full preview before you pay, built from 6 questions",
                    "$99 a month when you put the site live on your domain",
                    "Edits by chat, each one versioned so you can revert it",
                    "Service, fleet, and location pages as part of the build, not a later project",
                  ]}
                />
              </div>
            </div>
          </div>
          <p>
            You still own the site. Your photos, your words, and your domain go with you if you leave. There is no contract and no setup fee. The difference from a designer is who does the next edit, not a claim that one path will rank above the other.
          </p>
        </div>
      </Section>

      <Section id="pricing" title="Pricing for a truck repair website">
        <div className="max-w-3xl space-y-4 leading-relaxed">
          <p>
            The build is free. $99 a month when the site is live on your domain. That plan is the website: hosting, SSL, lead capture with instant delivery, and the chat editor. No contracts and no setup fees. You can cancel anytime. $149 a month is the plan that pairs the website with Google Business Profile work. $199 a month adds a review generator, a dedicated business phone, and branded email.
          </p>
          <p>
            Read the labels before you pick a plan. On the{" "}
            <Link to="/pricing/" className="text-primary underline underline-offset-4">plan comparison</Link>
            , automatic Google Business Profile optimization, the review generator, the dedicated business phone, and branded email are marked Soon. They are on the roadmap and they are not automated in the portal today. The $99 website is the plan you can use now. There is no separate monthly SEO retainer on top of that price. The on-site checklist is in the build.
          </p>
        </div>
      </Section>

      <Section id="local-seo" title="Local SEO and the Google Business Profile">
        <div className="max-w-3xl space-y-4 leading-relaxed">
          <p>
            A truck repair website in Chicagoland has two halves in local search. The website is one half. The Google Business Profile, the listing people see on Maps, is the other. The two halves have to describe the same shop. A website that says one set of hours and a listing that says another is the same problem as an old phone number on the door.
          </p>
          <p>
            The website half is built in. Correct name, address, and phone on every page. JSON-LD so a search engine can read the business, the services, and the area. Hours that match how the shop actually opens. A page for each service you offer. Fast pages on a phone, because that is where a driver searches. That is what{" "}
            <Link to="/services/seo/" className="text-primary underline underline-offset-4">built-in local SEO</Link>{" "}
            means on this site. It is not a monthly SEO retainer, and it is not a promise that a position will move.
          </p>
          <p>
            The profile half is{" "}
            <Link to="/localmapbooster/" className="text-primary underline underline-offset-4">LocalMapBooster</Link>
            , the page that describes{" "}
            <Link to="/localmapbooster/" className="text-primary underline underline-offset-4">Google Business Profile optimization</Link>{" "}
            next to the website. The hands-free, automatic version of that profile work is labeled Soon, the same way review generation and rankings inside the portal are labeled Soon. Your shop keeps the number it already answers, on the site and on the listing. Our text line is SMS only. The dedicated business phone on the $199 plan is one of the Soon items.
          </p>
          <p>
            What you can use today is the website: the pages, the number, the hours, the form that texts you the lead, and the chat editor when something changes. If Saturday inspections start, the DOT page and the hours should both say Saturday. If you stop taking a kind of work, take the page down.
          </p>
        </div>
      </Section>

      <Section id="towns" title="Romeoville, and the towns next to it">
        <div className="max-w-3xl space-y-4 leading-relaxed">
          <p>
            The truck repair client we can point to is in Romeoville, in Will County, on the I-55 corridor. The{" "}
            <Link to="/locations/romeoville-il/" className="text-primary underline underline-offset-4">Romeoville page</Link>{" "}
            is the city page for websites in that area. It talks about the exits drivers use, about truck parking and hours, and about neighboring towns a shop there often also serves: Bolingbrook, Lockport, and Plainfield.
          </p>
          <p>
            Those three towns are neighbors on a map. They are not doorway pages, and this website does not publish a separate location URL for each of them. A truck repair website for Chicagoland is still one shop: one yard, one set of hours, and the exits a driver can actually use. If your yard is in Romeoville and you also take trucks from Bolingbrook, Lockport, or Plainfield, say that on your site, because that is where you work. If you do not serve a town, leave it off. A page for a city you will not drive to does not help the person who searched it.
          </p>
          <p>
            Rank Me Higher has offices in downtown Chicago, at 1 N State St, and in Mundelein. Truck Clinic's yard is in Romeoville. Those are different addresses. We build the website for the shop. Questions before the preview go to the{" "}
            <Link to="/contact/" className="text-primary underline underline-offset-4">contact page</Link>{" "}
            or to a text.
          </p>
        </div>
      </Section>
    </>
  );
};

export default TruckRepairSections;
