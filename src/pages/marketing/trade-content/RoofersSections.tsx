import { Link } from "react-router-dom";
import { Bullets, Section } from "@/components/marketing/MarketingLayout";
import type { Trade } from "@/lib/marketing-data";

/**
 * Long-form body for /websites-for/roofers/.
 * Other trades keep the short template in TradePage until they grow a body of their own.
 */
const RoofersSections = ({ trade }: { trade: Trade }) => {
  return (
    <>
      <Section id="why-roofing" title="Why a roofing call starts on a phone">
        <div className="max-w-3xl space-y-4 leading-relaxed">
          <p>
            The person searching is in a driveway, under a ceiling stain, or in the car after a storm warning. They are checking whether this crew repairs roofs, replaces them, handles storm damage, or hangs gutters, whether a truck will come to their town, and whether a person will answer.
          </p>
          <p>
            Hail, wind, and ice at the eaves bunch those searches in the Chicago suburbs. A page someone can use on a phone, a number they can tap, and hours that match the door are what{" "}
            <Link to="/blog/service-business-website-tips/" className="text-primary underline underline-offset-4">any service business site needs</Link>.
            Roofing adds the job and the town.
          </p>
        </div>
      </Section>

      <Section id="service-pages" title="A page for each job people search by name">
        <div className="max-w-3xl space-y-4 leading-relaxed">
          <p>
            Publish a page only for work the company performs. A crew that repairs, replaces, and takes storm calls, and that also hangs gutters, needs a page for each of those.
          </p>
          <p>
            Roof repair is the urgent search. The visitor has a leak, a lifted shingle, failed flashing around a chimney, or a pipe boot that split. Say what repair means for that company: a dry-in and a section of shingles, or a full replacement once the deck is open. Say how soon someone can look. If you do not run same-day calls, say that, so a homeowner with water coming in is not left expecting a truck that is not coming. On the visit, valley metal, step flashing at a wall, the boots on plumbing vents, and the seal around a skylight are the spots that fail first. If you do not service skylights or chimneys, say so.
          </p>
          <p>
            Roof replacement is the planned search. Name the systems you actually install: architectural asphalt shingles, metal, or a flat roof such as TPO or modified bitumen. Say whether the job is a tear-off to the deck, with new underlayment and new flashing, or an overlay on the old layer. Ice-and-water protection in the valleys and at the eaves is a normal question after a winter of ice at the gutters, so say whether you install it. Leave a price off the page unless the company really charges it.
          </p>
          <p>
            The replacement page can still describe the job site: driveway protection, whether a dumpster or a trailer hauls the tear-off, a magnetic nail sweep at cleanup, and how many days a typical house takes. Two-story access, a steep slope, and a detached garage move that schedule.
          </p>
          <p>
            Storm damage shows up after hail or high wind, often the same afternoon. Say that the crew inspects it, what the homeowner should photograph before anything is covered, and whether someone from the company meets the insurance adjuster or only repairs after the homeowner has a decision. Photos of the slope for their records are a fair offer. A promise that the claim will be approved, that the deductible is waived, or that every carrier pays for a full replacement is not. If the crew tarps an active leak, say the tarp is temporary. Put a storm date on the site only when that storm happened and you are scheduling inspections.
          </p>
          <p>
            Gutters are their own search. Seamless gutters, guards, downspouts, and water backing up under the shingles are not a tear-off. Ice at the eaves is often a gutter and attic-ventilation problem next to a roofing problem. If the company hangs gutters, say which products and whether guards are included. If it does not, leave the page off.
          </p>
          <p>
            Chimney flashing, a skylight, soffit, and fascia get their own page only when people search that job and the crew does it. Commercial flat roofs and house roofs need separate pages when the company does both, because the buyer and the material are different. If the company does houses only, say so. The form should ask which job it is, which town the house is in, and whether water is coming in now.
          </p>
        </div>
      </Section>

      <Section id="service-areas" title="Service areas in the Chicago suburbs">
        <div className="max-w-3xl space-y-4 leading-relaxed">
          <p>
            The Chicago suburbs are not one service area. A crew around Orland Park, Joliet, Lockport, and Bolingbrook is a different drive from Naperville, Aurora, or Elgin, and a different drive again from Schaumburg, Arlington Heights, Downers Grove, or Mundelein. Homeowners search the town they live in. A page that only swaps the city name does not answer them.
          </p>
          <p>
            Websites for roofers should name the towns the truck will go to, in one service-area section that matches the Google Business Profile. Add a town page only for a job finished there, a second yard, or a service offered only in that area. Leave off any suburb the crew will not drive to. Say which towns are on the regular route, whether the work is houses only or also small commercial buildings, whether someone has to be home for the inspection, and whether a storm week extends the route.
          </p>
          <p>
            A roofer website design that clones one template for every suburb does not help a neighbor decide. Rank Me Higher's offices are in downtown Chicago, at 1 N State St, and in Mundelein. Those offices are not a roofer's service area.{" "}
            <Link to="/locations/romeoville-il/" className="text-primary underline underline-offset-4">Romeoville</Link>{" "}
            has a town page for businesses there. Questions about a preview go to the{" "}
            <Link to="/contact/" className="text-primary underline underline-offset-4">contact page</Link>, or by text.
          </p>
        </div>
      </Section>

      <Section id="photos-reviews-listing" title="Job photos, reviews, and the Google listing">
        <div className="max-w-3xl space-y-4 leading-relaxed">
          <p>
            Show a tear-off, the deck, step flashing, a ridge, a gutter run, and the truck in a driveway. A stock photo of a person in a hard hat, or a house the crew did not work on, does not show the work. Use photos from finished jobs: a slope before and after hail, a chimney that was re-flashed, gutters pulling off the fascia.             Name the town in the caption when you are willing, and leave the street number off. If there is no photo of a service, do not invent one. A missing frame on the first build is filled with natural imagery of the trade, and the crew replaces it with a photo from the job.
          </p>
          <p>
            The Google listing is often what the homeowner sees before the website. It carries the business name, the roofer category, the hours, the phone, the towns, the services, the photos, and the reviews. An old phone number, Saturday hours the crew does not work, or a gutter service on the listing that the site never mentions is the same failure as a wrong number on the door. Every page should use the same name, address, and phone. Hours should match the door, including a holiday closure and a Saturday inspection window if you run one.
          </p>
          <p>
            JSON-LD lets a search engine read the business, the services, and the area. That checklist is{" "}
            <Link to="/services/seo/" className="text-primary underline underline-offset-4">how local search is built into the website</Link>.
            It is part of the website, not a monthly SEO retainer, and it does not guarantee a map position, a page-one placement, or a number of calls. Reviews start with{" "}
            <Link to="/blog/review-generation-strategies/" className="text-primary underline underline-offset-4">asking after the job</Link>, while the visit is still easy to remember. Show a rating only when it is the rating on the listing. The{" "}
            <Link to="/blog/google-business-profile-mistakes/" className="text-primary underline underline-offset-4">usual listing mistakes</Link>{" "}
            and the{" "}
            <Link to="/blog/google-maps-ranking-2025/" className="text-primary underline underline-offset-4">Maps guide</Link>{" "}
            cover the category, the hours, the photos, and the posts on the listing.
          </p>
        </div>
      </Section>

      <Section id="mobile-call-text" title="A fast page, with a call and a text">
        <div className="max-w-3xl space-y-4 leading-relaxed">
          <p>
            The visit is on a phone, often outside. The company's number, the same one as the listing, should be tap-to-call on the first screen and on every service page, with the hours beside it.             A homeowner checking at 7 in the evening needs to know whether someone answers. A text matters when they cannot talk, or when they want to send a photo of the ceiling or the slope. The page has to load quickly. Fast mobile pages are part of the first build, not a project ordered after the design.
          </p>
        </div>
      </Section>

      <Section id="plan-and-editor" title="What the $99 plan and the editor do with that">
        <div className="max-w-3xl space-y-4 leading-relaxed">
          <p>
            You answer 6 questions about the company. The AI researches the market, plans the pages from the services and towns you name, writes them, and builds the site in minutes, not weeks. The live preview arrives by text. You see the whole site before you pay anything. The build is free. You pay when you claim the site and put it on your domain. How a site is produced for any local business is on the{" "}
            <Link to="/services/websites/" className="text-primary underline underline-offset-4">AI-built websites</Link> page.
          </p>
          <p>
            The website plan is $99 a month once the site is live on your domain. That is hosting, SSL, and security, lead capture with instant delivery, the chat editor, and your portal. No contract and no setup fee. You can cancel anytime. You own the content and the domain, and both go with you if you leave.{" "}
            <Link to="/pricing/" className="text-primary underline underline-offset-4">See all plans</Link>{" "}
            for anything beyond the website. Items labeled Soon on that page, including automatic Google Business Profile optimization and the review generator, are on the roadmap and are not automated in the portal today. The listing side of the work, separate from these pages, is{" "}
            <Link to="/localmapbooster/" className="text-primary underline underline-offset-4">LocalMapBooster</Link>.
          </p>
          <p>
            After the site is on your domain, the person who knows the hours should be able to change them the same day. Open the portal, click the part that changed, and say it the way you would text someone. The{" "}
            <Link to="/ai-website-editor/" className="text-primary underline underline-offset-4">AI website editor</Link>{" "}
            makes the change. Every edit is versioned, so you can revert it if the wording is wrong.
          </p>
          <Bullets items={trade.jobs} />
          <div className="space-y-2 text-sm text-white/55">
            {trade.chatExamples.map((c) => (
              <p key={c} className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">{c}</p>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default RoofersSections;
