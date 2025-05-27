
const popupContent = {
    terms: `<h2>Terms & Conditions</h2>
    <ul>
        <li><strong>Acceptance of Terms:</strong> By accessing and using this website, you agree to be bound by these terms and conditions, all applicable laws, and regulations.</li>
        <li><strong>Event Registration:</strong> Participation in the 1st Delhi Art Symposium requires completion of the official registration form and full payment of registration fees.</li>
        <li><strong>Accuracy of Information:</strong> You agree to provide true, accurate, and complete information during registration and understand that false submissions may lead to disqualification.</li>
        <li><strong>Intellectual Property Rights:</strong> All content, including text, logos, graphics, and media, are the intellectual property of Global Folk Arts International unless otherwise stated.</li>
        <li><strong>Use of Artwork Submissions:</strong> By uploading artwork during registration, you grant Global Folk Arts International the right to display, promote, and share your artwork for event-related purposes with proper attribution.</li>
        <li><strong>Data Privacy and Protection:</strong> We collect personal data solely for event purposes and will not share it with third parties without your consent, in accordance with our <a href='#' onclick="openPopup('privacy')">Privacy Policy</a>.</li>
        <li><strong>Payment Terms:</strong> All payments are to be made in full during registration. Payment gateways are secure and provided via approved providers (e.g., Razorpay or Stripe).</li>
        <li><strong>Currency and Charges:</strong> All fees displayed are in INR (₹). International transactions may incur conversion charges by your financial institution.</li>
        <li><strong>Cancellation Policy:</strong> Once registration is confirmed, cancellation requests will not be entertained after a specified date (to be announced). No refunds after this date.</li>
        <li><strong>Refund Policy:</strong> Refunds (if applicable) will be processed within 15 business days and may be subject to administrative fees.</li>
        <li><strong>Changes to Event Details:</strong> Global Folk Arts International reserves the right to change the event venue, dates, speakers, or agenda without prior notice due to unforeseen circumstances.</li>
        <li><strong>Code of Conduct:</strong> All participants must conduct themselves respectfully and professionally. Harassment, abuse, or disruptive behavior will result in immediate removal without refund.</li>
        <li><strong>Third-Party Links:</strong> Our website may contain links to third-party websites. We are not responsible for their content or privacy practices.</li>
        <li><strong>Limitation of Liability:</strong> We shall not be liable for any loss or damage, including indirect or consequential losses, resulting from your use of this website or participation in the event.</li>
        <li><strong>Force Majeure:</strong> We are not liable for any failure to perform obligations due to events beyond our reasonable control (natural disasters, pandemics, etc.).</li>
        <li><strong>User Content Restrictions:</strong> You may not upload or submit any unlawful, defamatory, abusive, or copyrighted content without authorization.</li>
        <li><strong>Photo and Video Consent:</strong> By participating, you consent to being photographed or recorded for use in promotional materials related to the symposium.</li>
        <li><strong>Email Communication:</strong> By registering, you agree to receive event-related communication from our official email address: info@globalfolkartsinternational.com.</li>
        <li><strong>Account Termination:</strong> We reserve the right to suspend or terminate access to the site for users who violate these terms.</li>
        <li><strong>Governing Law:</strong> These terms are governed by the laws of India. Disputes arising from these terms will be subject to the jurisdiction of courts in New Delhi.</li>
    </ul>`,
    privacy: `<h2>Privacy Policy</h2>
    <p><strong>Last updated:</strong> May 28, 2025</p>
    <ol>
        <li><strong>Information We Collect:</strong><br>Name, Email address, WhatsApp number, Country, Uploaded images (artworks), Social media handle, Special requirements (if any)</li>
        <li><strong>How We Collect It:</strong><br>Information is collected via our secure online registration form hosted on our website, powered by Netlify and secure payment platforms.</li>
        <li><strong>Purpose of Collection:</strong><br>To confirm participation, showcase artwork, send event updates, support logistics, and process payments or refunds.</li>
        <li><strong>Data Protection and Security:</strong><br>We implement encryption and access controls to safeguard your information.</li>
        <li><strong>Sharing with Third Parties:</strong><br>We do not sell or rent your information. Minimal data may be shared with Razorpay or sponsors with your consent.</li>
        <li><strong>International Data Transfers:</strong><br>Compliant with applicable cross-border data transfer laws.</li>
        <li><strong>Email Communication:</strong><br>By registering, you agree to receive event emails from info@globalfolkartsinternational.com. You may opt out after the event.</li>
        <li><strong>Data Retention:</strong><br>We retain your data only for the duration required for coordination and compliance.</li>
        <li><strong>Your Rights:</strong><br>You can access, correct, withdraw, or request deletion of your data via info@globalfolkartsinternational.com.</li>
        <li><strong>Legal Compliance:</strong><br>Compliant with India’s IT Act and international regulations like GDPR for EU residents.</li>
    </ol>`,
    refund: `<h2>Cancellation & Refund Policy</h2>
    <p><strong>Last updated:</strong> May 28, 2025</p>
    <ol>
        <li><strong>Cancellation by Participant:</strong><br>
            Cancellations must be emailed to info@globalfolkartsinternational.com.<br>
            Cancellations before 10th August 2025 are eligible for a partial refund.<br>
            No cancellations are accepted after 10th August 2025.
        </li>
        <li><strong>Refund Terms:</strong><br>
            75% refund for cancellations on or before 10th August 2025.<br>
            25% retained as administrative fees.<br>
            No refunds after this date.<br>
            Refunds processed within 15 business days from approval.
        </li>
        <li><strong>Non-Attendance:</strong><br>
            No refund if you fail to attend without prior written cancellation.
        </li>
        <li><strong>Mode of Refund:</strong><br>
            Processed to the original payment method.<br>
            International refunds may take longer due to transaction timelines.
        </li>
        <li><strong>Event Postponement or Cancellation by Organizer:</strong><br>
            If the event is canceled/postponed by organizers due to unforeseen circumstances:<br>
            You may choose between a full refund or a credit for a future event within one year.
        </li>
        <li><strong>Contact for Queries:</strong><br>
            For questions, email us at: info@globalfolkartsinternational.com
        </li>
    </ol>`
};
(type) {
    const popup = document.getElementById("popup");
    const content = document.getElementById("popup-content");
    let text = "";
    if (type === 'terms') {
        text = `<h2>Terms & Conditions</h2>
    <ul>
        <li><strong>Acceptance of Terms:</strong> By accessing and using this website, you agree to be bound by these terms and conditions, all applicable laws, and regulations.</li>
        <li><strong>Event Registration:</strong> Participation in the 1st Delhi Art Symposium requires completion of the official registration form and full payment of registration fees.</li>
        <li><strong>Accuracy of Information:</strong> You agree to provide true, accurate, and complete information during registration and understand that false submissions may lead to disqualification.</li>
        <li><strong>Intellectual Property Rights:</strong> All content, including text, logos, graphics, and media, are the intellectual property of Global Folk Arts International unless otherwise stated.</li>
        <li><strong>Use of Artwork Submissions:</strong> By uploading artwork during registration, you grant Global Folk Arts International the right to display, promote, and share your artwork for event-related purposes with proper attribution.</li>
        <li><strong>Data Privacy and Protection:</strong> We collect personal data solely for event purposes and will not share it with third parties without your consent, in accordance with our <a href='#' onclick="openPopup('privacy')">Privacy Policy</a>.</li>
        <li><strong>Payment Terms:</strong> All payments are to be made in full during registration. Payment gateways are secure and provided via approved providers (e.g., Razorpay or Stripe).</li>
        <li><strong>Currency and Charges:</strong> All fees displayed are in INR (₹). International transactions may incur conversion charges by your financial institution.</li>
        <li><strong>Cancellation Policy:</strong> Once registration is confirmed, cancellation requests will not be entertained after a specified date (to be announced). No refunds after this date.</li>
        <li><strong>Refund Policy:</strong> Refunds (if applicable) will be processed within 15 business days and may be subject to administrative fees.</li>
        <li><strong>Changes to Event Details:</strong> Global Folk Arts International reserves the right to change the event venue, dates, speakers, or agenda without prior notice due to unforeseen circumstances.</li>
        <li><strong>Code of Conduct:</strong> All participants must conduct themselves respectfully and professionally. Harassment, abuse, or disruptive behavior will result in immediate removal without refund.</li>
        <li><strong>Third-Party Links:</strong> Our website may contain links to third-party websites. We are not responsible for their content or privacy practices.</li>
        <li><strong>Limitation of Liability:</strong> We shall not be liable for any loss or damage, including indirect or consequential losses, resulting from your use of this website or participation in the event.</li>
        <li><strong>Force Majeure:</strong> We are not liable for any failure to perform obligations due to events beyond our reasonable control (natural disasters, pandemics, etc.).</li>
        <li><strong>User Content Restrictions:</strong> You may not upload or submit any unlawful, defamatory, abusive, or copyrighted content without authorization.</li>
        <li><strong>Photo and Video Consent:</strong> By participating, you consent to being photographed or recorded for use in promotional materials related to the symposium.</li>
        <li><strong>Email Communication:</strong> By registering, you agree to receive event-related communication from our official email address: info@globalfolkartsinternational.com.</li>
        <li><strong>Account Termination:</strong> We reserve the right to suspend or terminate access to the site for users who violate these terms.</li>
        <li><strong>Governing Law:</strong> These terms are governed by the laws of India. Disputes arising from these terms will be subject to the jurisdiction of courts in New Delhi.</li>
    </ul>
                <ul>
                    <li>Participants must be 18 years or older.</li>
                    <li>All artworks submitted must be original.</li>
                    <li>Event organizers reserve the right to disqualify any participant for misconduct.</li>
                    <li>Participants are responsible for their own travel and accommodation arrangements.</li>
                </ul>`;
    } else if (type === 'privacy') {
        text = `<h2>Privacy Policy</h2>
    <p><strong>Last updated:</strong> May 28, 2025</p>
    <ol>
        <li><strong>Information We Collect:</strong><br>Name, Email address, WhatsApp number, Country, Uploaded images (artworks), Social media handle, Special requirements (if any)</li>
        <li><strong>How We Collect It:</strong><br>Information is collected via our secure online registration form hosted on our website, powered by Netlify and secure payment platforms.</li>
        <li><strong>Purpose of Collection:</strong><br>To confirm participation, showcase artwork, send event updates, support logistics, and process payments or refunds.</li>
        <li><strong>Data Protection and Security:</strong><br>We implement encryption and access controls to safeguard your information.</li>
        <li><strong>Sharing with Third Parties:</strong><br>We do not sell or rent your information. Minimal data may be shared with Razorpay or sponsors with your consent.</li>
        <li><strong>International Data Transfers:</strong><br>Compliant with applicable cross-border data transfer laws.</li>
        <li><strong>Email Communication:</strong><br>By registering, you agree to receive event emails from info@globalfolkartsinternational.com. You may opt out after the event.</li>
        <li><strong>Data Retention:</strong><br>We retain your data only for the duration required for coordination and compliance.</li>
        <li><strong>Your Rights:</strong><br>You can access, correct, withdraw, or request deletion of your data via info@globalfolkartsinternational.com.</li>
        <li><strong>Legal Compliance:</strong><br>Compliant with India’s IT Act and international regulations like GDPR for EU residents.</li>
    </ol>
                <ul>
                    <li>Your personal data will be used solely for event registration and communication.</li>
                    <li>We do not share your information with third parties without consent.</li>
                    <li>All data is stored securely and will be deleted post-event if requested.</li>
                </ul>`;
    } else if (type === 'refund') {
        text = `<h2>Cancellation & Refund Policy</h2>
                <ul>
                    <li>Full refund if cancelled 30 days prior to event.</li>
                    <li>50% refund if cancelled within 15-30 days prior to event.</li>
                    <li>No refund for cancellations less than 15 days before the event.</li>
                    <li>Refunds will be processed within 10 business days.</li>
                </ul>`;
    }
    content.innerHTML = text;
    popup.style.display = "block";
}
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

