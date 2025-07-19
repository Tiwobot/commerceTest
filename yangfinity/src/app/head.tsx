export default function Head() {
  return (
    <>
      {/* Trustpilot Verification Script (static for crawler detection) */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,r,n){w.TrustpilotObject=n;w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)};
            var a=d.createElement(s);a.async=1;a.src=r;a.type='text/javascript';var f=d.getElementsByTagName(s)[0];
            f.parentNode.insertBefore(a,f)})(window,document,'script', 'https://invitejs.trustpilot.com/tp.min.js', 'tp');
            tp('register', '049PdqiRfjj2TNGr');
          `
        }}
      />
    </>
  );
} 