"use client";
import { ReactElement } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import MainLayout from "@/components/MainLayout";
import getURL from "@/utils/url";

const Page = () => {
  const { pathname } = useRouter();
  const title = "Terms of Use - Experior";
  const description =
    "Check out our latest articles about AI and the future of content creation";
  return (
    <>
      <Head>
        <title>Terms of Use - Experior</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="AI, Content Generator, AI Assistant" />
        <meta property="og:title" content={title} key="title" />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={getURL("/logo-color.png")} />
        <meta property="og:url" content={getURL(pathname)} />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content={getURL(pathname)} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={getURL("/logo-color.png")} />
      </Head>
      <div className="md:max-w-6xl m-auto flex flex-col p-8 bg-white text-gray-700">
        <h1 className="text-4xl font-bold">Terms of Use</h1>
        <div className="flex flex-col mt-8 gap-6">
            <p>Experior is a trade name used by Talendor, L.L.C., a Delaware company, for its AI tools and services. 
                These Terms of Use cover your use of Experior tools, 
                and other services provided by Experior, including software applications
                and websites. They form an agreement between you and Talendor, L.L.C., a 
                Delaware company, and include important information about resolving 
                disputes through arbitration. By using our Services, you agree to these 
                Terms. If you live in the European Economic Area, Switzerland, or the 
                UK, these terms apply to you. Our Business Terms apply to Experior and other services for businesses and developers. 
                Our Privacy Policy explains how we collect and use personal information 
                and is an important document you should read, even though it&apos;s not part of these Terms.</p>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-medium">About us</h2>
          <p>Experior is a company focused on AI research and deployment. 
            Our goal is to ensure that artificial general intelligence benefits humanity as a whole. 
            For more information about Experior, please visit https://experior.ai</p>
          </div>
          <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-medium">Registration and Access</h2>
          <p><span className="font-bold">Minimum Age</span>. To use our Services, you must be at least 13 
          years old or the minimum age required in your country to consent. If you are under 18, 
          you need permission from your parent or legal guardian to use the Services.</p>
            <p><span className="font-bold">Registration</span>. You need to provide accurate and complete information to register 
for an account. You cannot share your account details or let anyone else use your 
account, and you are responsible for all activities that occur under your account. 
If you create an account or use the Services for someone else, you must have the 
authority to accept these Terms on their behalf.</p>
</div>
<div className="flex flex-col gap-2">
          <h2 className="text-2xl font-medium">Using our services</h2>
          <p><span className="font-bold">What You Can Do.</span> You can access and use our Services as long as you follow 
            these Terms. This means you must obey all laws and also follow our usage Policies, and any other guidelines or policies we 
            provide.</p>
            <p><span className="font-bold">What You Cannot Do.</span> You can&apos;t use our Services for anything illegal, harmful, or abusive. 
            For example, you can&apos;t:
Use our Services in a way that violates anyone&apos;s rights.
Modify, copy, lease, sell, or distribute any part of our Services.
Try to figure out the source code of our Services, including our models, algorithms, 
or systems, unless it&apos;s allowed by law.
Automatically collect data or Output (defined below).
Claim that Output was created by a human when it wasn&apos;t.
Disrupt our Services, like bypassing any limits or safety measures.
Use Output to make models that compete with Experior.</p>
<p><span className="font-bold">Software.</span> You might be able to download software 
from our Services, like mobile apps, which might update automatically. Our software 
might also include open source software that has its own licenses.</p>
<p><span className="font-bold">Corporate Domains.</span> If you sign up using an email 
address from an organization (like your employer), your account might be added to the 
organization&apos;s account with us. This means the organization&apos;s administrator 
can control your account and access your content.</p>
<p><span className="font-bold">Third Party Services.</span> Our Services might include 
third-party software, products, or services. These have their own terms, and we are not responsible for them.</p>
<p><span className="font-bold">Feedback.</span> We value your feedback and may use it 
without paying you or asking for permission.</p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-medium">Content</h2>
            <p><span className="font-bold">Your content.</span> You can add information to our 
            Services (&quot;Input&quot;) and get results based on that information (&quot;Output&quot;). Both Input 
            and Output are called &quot;Content.&quot; You are in charge of making sure your Content 
            follows all laws and these Terms. You promise that you have the right to give us 
            Input for our Services.</p>
            <p><span className="font-bold">Ownership of Content.</span> Between you and Experior, as allowed by law, you (a) keep your rights to the Input and (b) own the Output. 
            We give you all our rights to the Output.</p>
            <p><span className="font-bold">Similarity of Content.</span> Because of how our Services and artificial 
            intelligence work, the Output might not be unique, and other users might get similar 
            results. Our promise to give you rights doesn&apos;t apply to other users&apos; 
            results or any third-party results.</p>
            <p><span className="font-bold">Our Use of Content.</span>We can use Content 
            to run, improve, and develop our Services, follow the law, enforce our terms and 
            policies, and keep our Services safe.</p>
            <p><span className="font-bold">Opt Out.</span>If you don&apos;t want us to use your Content 
            to improve our models, you can opt out by following the instructions in this Help 
            Center article. Please note that this might limit how well our Services can meet 
            your specific needs.</p>
            <p><span className="font-bold">Accuracy.</span> Artificial intelligence and machine learning 
            are quickly changing fields. We&apos;re always trying to make our Services better, more accurate, 
            reliable, safe, and useful. Because machine learning is based on probabilities, 
            sometimes the Output might not accurately represent real people, places, or facts.</p>
            <p>When you use our Services, you understand and agree:</p>
            <ul className="flex flex-col list-disc pl-12">
                <li>The Output might not always be accurate. Don&apos;t use it as your 
                    only source of truth or facts, or as a replacement for professional 
                    advice.</li>
                <li>You should check the Output for accuracy and suitability for your 
                    needs, including getting a human review if needed, before using or 
                    sharing it.</li>
                <li>Don&apos;t use any Output about a person for anything that could 
                    seriously affect them, like decisions about credit, education, 
                    employment, housing, insurance, legal matters, medical care, or 
                    other important things.</li>
                <li>Our Services might give incomplete, incorrect, or offensive Output that 
                    doesn&apos;t reflect Experior&apos;s views. If the Output mentions any third-party products or 
                    services, it doesn&apos;t mean those third parties endorse or are connected to Experior.</li>
            </ul>
          </div>
          
          <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-medium">Paid accounts</h2>
          <p><span className="font-bold">Billing.</span> If you buy any Services, you 
          must give us complete and correct billing information, including a valid way 
          to pay. For paid subscriptions, we will automatically charge your payment 
          method when it&apos;s time to renew until you cancel. You need to pay all taxes, 
          and we&apos;ll add tax if we need to. If we can&apos;t process your payment, we might 
          lower your account level or stop your access to our Services until we get 
          the 
          payment.</p>
          <p><span className="font-bold">Service Credits.</span> You can pay for some 
          Services ahead of time by buying service credits. All service credits follow 
          our Service Credit Terms.</p>
          
          <p><span className="font-bold">Cancellation.</span> You can cancel your paid 
          subscription anytime. Payments are not refundable, except where the law 
          requires it. These Terms don&apos;t change any local laws that give you rights to 
          cancel.</p>
          <p><span className="font-bold">Changes.</span> We might change our prices 
          sometimes. If we raise our subscription prices, we&apos;ll let you know at least 
          30 days before, and the new price will start at your next renewal. This way, 
          you can cancel if you don&apos;t agree with the price increase.</p>
          </div>
          <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-medium">Termination and Suspension</h2>
          <p><span className="font-bold">Termination.</span> You can choose to stop 
          using our Services whenever you want. We have the right to pause or end 
          your access to our Services or remove your account if we find:</p>
          <ul className="flex flex-col list-disc pl-12">
            <li>You didn&apos;t follow these Terms or our Usage Policies.</li>
            <li>We need to do this to obey the law.</li>
            <li>Your use of our Services might cause danger or harm to Experior, our users, or anyone else.</li>
            <li>We might also end your account if it hasn&apos;t been used for over a year and you don&apos;t have a paid account. 
                If we decide to do this, we&apos;ll let you know in advance.</li>
          </ul>
          <p><span className="font-bold">Appeals.</span> If you think we&apos;ve paused or 
          ended your account by mistake, you can appeal by reaching out to our Support team.</p>
          </div>
          <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-medium">Termination of Services</h2>
          <p>If we choose to terminate our Services, we will notify you in advance and provide a refund for any prepaid services that have not been used.</p>
          </div>
          <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-medium">Exclusion of Warranties</h2>
          <p>Our Services are offered &quot;as is.&quot; Unless the law mandates otherwise, we, along with our affiliates and licensors, do not provide any warranties (express, implied, statutory, or otherwise) regarding the Services. We disclaim all warranties, including but not limited to, warranties of merchantability, fitness for a particular purpose, satisfactory quality, non-infringement, and quiet enjoyment, as well as any warranties arising from any course of dealing or usage in trade. We do not guarantee that the Services will be uninterrupted, accurate, or error-free, or that any content will be secure or not lost or altered.</p>
          <p>You acknowledge and agree that using outputs from our Service is entirely at your own risk, and you should not rely on these outputs as the sole source of truth or factual information, nor as a substitute for professional advice.</p>
          </div>
          <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-medium">Limitation of Liability</h2>
          <p>Neither we nor our affiliates or licensors will be responsible for any indirect, incidental, special, consequential, or exemplary damages, including damages for loss of profits, goodwill, use, or data or other losses, even if we have been informed of the possibility of such damages. Our total liability under these Terms will not exceed the greater of the amount you paid for the Service that led to the claim during the 12 months prior to the liability arising, or one hundred dollars ($100). The limitations in this section apply to the fullest extent allowed by applicable law.</p>
          <p>Some countries and states do not permit the exclusion of certain warranties or the limitation of certain damages, so some or all of the above terms may not apply to you, and you may have additional rights. In that case, these Terms will only limit our responsibilities to the maximum extent permitted in your country of residence.</p>
          <p>The affiliates, suppliers, licensors, and distributors of Experior are intended third-party beneficiaries of this section.</p></div>
          <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-medium">Indemnity</h2>
          <p>If you are a business or organization, to the extent permitted by law, you will indemnify and hold us, our affiliates, and our personnel harmless from any costs, losses, liabilities, and expenses (including attorneys&apos; fees) arising from third-party claims related to your use of the Services and Content or any breach of these Terms.</p>
          </div>
          <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-medium">Dispute Resolution</h2>
          <p>You and Experior agree to the following mandatory arbitration and class action waiver provisions:</p>
          <p><span className="font-bold">Mandatory Arbitration:</span> You and Experior agree to resolve any claims arising from these Terms or our Services, regardless of when the claim occurred, through final and binding arbitration. You have the option to opt out of arbitration within 30 days of creating your account or within 30 days after any updates to these arbitration terms by filling out this form. If you opt out of an update, the last agreed-upon arbitration terms will apply.</p>
          <p><span className="font-bold">Informal Dispute Resolution:</span> We prefer to address your concerns informally before taking legal action. Before either party files a claim against the other, we agree to attempt to resolve the dispute informally. You can do this by sending us notice through this form, and we will do so by contacting the email associated with your account. If we cannot resolve a dispute within 60 days, either party has the right to initiate arbitration. Both parties also agree to attend an individual settlement conference if requested during this time. Any statute of limitations will be paused during this informal resolution process.</p>
          <p><span className="font-bold">Arbitration Forum:</span>If we cannot resolve the dispute, either party may start arbitration with National Arbitration and Mediation (&quot;NAM&quot;) under its rules (available here). Experior will not seek attorney&apos;s fees and costs in arbitration unless the arbitrator finds your claim to be frivolous. The Federal Arbitration Act will govern these arbitration terms and any arbitration since these Terms involve interstate commerce.</p>
          <p><span className="font-bold">Arbitration Procedures:</span> Arbitration will be conducted via videoconference if possible. If an in-person hearing is necessary, the location will be mutually agreed upon, in your county of residence, or as determined by the arbitrator. The arbitration will be conducted by a single arbitrator, who will be a retired judge or an attorney licensed in California. The arbitrator has exclusive authority to resolve any dispute, except for issues related to the enforceability or validity of the class action waiver or requests for public injunctive relief, which will be determined by the state or federal courts of San Francisco, California. The arbitrator can grant motions that dispose of all or part of any dispute.</p>
          <p><span className="font-bold">Exceptions:</span> This section does not require informal dispute resolution or arbitration for individual claims in small claims court or for injunctions to stop unauthorized use of the Services or intellectual property infringement.</p>
          <p><span className="font-bold">Class and Jury Trial Waivers:</span> You and Experior agree that disputes must be brought individually and not as part of any class, consolidated, or representative proceeding. Class arbitrations, class actions, and representative actions are not allowed. Only individual relief is available. Any request for public injunctive relief will be litigated in court after arbitration of the underlying claim and all other claims. This does not prevent participation in a class-wide settlement. Both parties waive any right to a jury trial in any action, proceeding, or counterclaim.</p>
          <p><span className="font-bold">Batch Arbitration:</span> If 25 or more claimants represented by the same or similar counsel file arbitration demands for substantially similar disputes within 90 days, you and Experior agree that NAM will administer them in batches of up to 50 claimants each, unless there are fewer than 50 claimants in total. Each batch will be treated as a single consolidated arbitration with one arbitrator, one set of fees, and one hearing held by videoconference or in a location decided by the arbitrator. If any part of this section is found to be invalid or unenforceable for a particular claimant or batch, it will be severed and arbitrated individually.</p>
          <p><span className="font-bold">Severability:</span> If any part of these arbitration terms is found to be illegal or unenforceable, the rest will remain in effect. However, if the finding of partial illegality or unenforceability would allow class arbitration, class action, or representative action, then this entire dispute resolution section will be unenforceable.</p>
          </div>
          <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-medium">Copyright Infringement Notices</h2>
          <p>If you suspect that your intellectual property rights have been violated, please send a notification to the address provided below or complete this form. We reserve the right to remove or disable access to content that we believe breaches these Terms or is alleged to infringe upon copyright, and we may terminate the accounts of repeat infringers when necessary.</p>
          <div className="flex flex-col pl-12 py-4">
                <div>7345 W SAND LAKE RD STE 210 OFFICE</div>
                <div>ORLANDO FL</div>
                <div>32819</div>
          </div>
          <p>Your written notification of copyright infringement should include the following details:</p>
          <ul className="flex flex-col list-disc pl-12">
            <li>A physical or electronic signature of the individual authorized to represent the owner of the copyrighted material</li>
            <li>A detailed description of the copyrighted work that you allege has been infringed</li>
            <li>A description of the location of the purportedly infringing material on our website, so we can locate it</li>
            <li>Your contact information, including address, telephone number, and email address</li>
            <li>A statement from you asserting your good-faith belief that the disputed use of the material is not authorized by the copyright owner, their agent, or the law</li>
            <li>A declaration from you, made under penalty of perjury, affirming that the information in your notice is accurate and that you are the copyright owner or have the authority to act on behalf of the copyright owner.</li>
          </ul>
          </div>
          <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-medium">General Terms</h2>
          <p><span className="font-bold">Assignment:</span> You are not permitted to assign or transfer any rights or obligations under these Terms, and any attempt to do so will be null and void. We reserve the right to assign our rights or obligations under these Terms to any affiliate, subsidiary, or successor in interest of any business associated with our Services.</p>
          <p>Updates to These Terms or Our Services: We are continually striving to enhance our Services. As a result, we may update these Terms or our Services from time to time. Changes may be made for reasons such as:</p>
          <ul className="flex flex-col list-disc pl-12">
            <li>Changes in the law or regulatory requirements.</li>
            <li>Security or safety considerations.</li>
            <li>Circumstances beyond our reasonable control.</li>
            <li>Routine developments in our Services.</li>
            <li>Adaptation to new technologies.</li>
          </ul>
          <p>We will provide at least 30 days&apos; advance notice of any changes to these Terms that materially adversely affect you, either via email or an in-product notification. All other changes will take effect immediately upon being posted on our website. If you disagree with the changes, you must cease using our Services.</p>
          <p><span className="font-bold">Enforcement of These Terms: </span> Our failure to enforce a provision is not a waiver of our right to do so later. Except as specified in the dispute resolution section above, if any part of these Terms is found to be invalid or unenforceable, that part will be enforced to the maximum extent permissible, and it will not affect the enforceability of any other terms.</p>
          <p><span className="font-bold">Trade Controls: </span> You must adhere to all applicable trade laws, including sanctions and export control laws. Our Services may not be used in or for the benefit of, or exported or re-exported to, any U.S. embargoed country or territory or any individual or entity subject to trade restrictions under applicable laws. Our Services may not be used for any purpose prohibited by trade laws, and your Input may not include material or information that requires a government license for release or export.</p>
          <p><span className="font-bold">Entire Agreement: </span> These Terms constitute the entire agreement between you and Experior regarding the Services and supersede any prior or contemporaneous agreements between you and Experior, except for any Service-specific terms.</p>
          <p><span className="font-bold">Governing Law: </span>The laws of Delaware, excluding its conflict of laws principles, will govern these Terms. Except as outlined in the dispute resolution section above, all claims arising out of or relating to these Terms will be brought exclusively in the federal or state courts of Dover, Delaware.</p>
          </div>
        </div>
      </div>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Page;
