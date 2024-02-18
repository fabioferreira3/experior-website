"use client";
import { ReactElement } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import MainLayout from "@/components/MainLayout";
import getURL from "@/utils/url";

const Page = () => {
  const { pathname } = useRouter();
  const title = "Terms of Use - Experior AI";
  const description =
    "Check out our latest articles about AI and the future of content creation";
  return (
    <>
      <Head>
        <title>Terms of Use - Experior AI</title>
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
            <p>These Terms of Use cover your use of Experior AI tool, 
                and other services provided by Talendor, including software applications
                and websites. They form an agreement between you and Talendor, L.L.C., a 
                Delaware company, and include important information about resolving 
                disputes through arbitration. By using our Services, you agree to these 
                Terms. If you live in the European Economic Area, Switzerland, or the 
                UK, these terms apply to you. Our Business Terms apply to Experior AI and other services for businesses and developers. 
                Our Privacy Policy explains how we collect and use personal information 
                and is an important document you should read, even though it&apos;s not part of these Terms.</p>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-medium">About us</h2>
          <p>Experior AI is a company focused on AI research and deployment. 
            Our goal is to ensure that artificial general intelligence benefits humanity as a whole. 
            For more information about Experior AI, please visit https://experior.ai</p>
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
Use Output to make models that compete with Experior AI.</p>
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
            <p><span className="font-bold">Ownership of Content.</span> Between you and Experior AI, as allowed by law, you (a) keep your rights to the Input and (b) own the Output. 
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
                    doesn&apos;t reflect Experior AI&apos;s views. If the Output mentions any third-party products or 
                    services, it doesn&apos;t mean those third parties endorse or are connected to Experior AI.</li>
            </ul>
          </div>
          
          <h2 className="text-2xl font-medium">Paid accounts</h2>
          <h2 className="text-2xl font-medium">Termination and Suspension</h2>
          <h2 className="text-2xl font-medium">Discontinuation of Services</h2>
          <h2 className="text-2xl font-medium">Disclaimer of Warranties</h2>
          <h2 className="text-2xl font-medium">Limitation of Liability</h2>
          <h2 className="text-2xl font-medium">Indemnity</h2>
          <h2 className="text-2xl font-medium">Dispute Resolution</h2>
          <h2 className="text-2xl font-medium">Copyright Complaints</h2>
          <h2 className="text-2xl font-medium">General Terms</h2>
        </div>
      </div>``
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Page;
