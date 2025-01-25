# Customer Tasks

This part includes the organized, prioritized, and resolved customer tickets for the Resend Customer Success Engineer take-home challenge.

---

## Customer Tickets Table

The customer tickets have been organized into the following table with columns for labels, priorities, responses, and internal notes. You can download the complete table below:

[Download customer-tasks.xlsx](./customer-tasks.xlsx)

---

## Escalation Message

**Subject:** Escalation: Rate Limiting Issue (High Customer Impact)

**Message:**

Hi Team,

A customer has reported an issue with rate limiting that is impacting their workflow. When they send notifications, they encounter the following error: Too many requests. You can only make 2 requests per second. See rate limit response headers for more information.


**Steps to Reproduce:**
1. Send more than 2 requests per second to the `/send` endpoint.
2. Observe the error response.

**Impact:**
This limitation prevents the customer from sending high-volume notifications during peak times. They are considering alternatives if the issue cannot be resolved.

**Proposed Solution:**
- Evaluate increasing the rate limit for verified accounts.
- Provide clearer error messaging or rate-limiting headers with retry-after information.

Let me know if you need more details!

Best regards,  
Faith

---

## Approach to Solving Tickets

The following steps were taken to resolve customer tickets:

### 1. **Organize**
Each ticket was labeled into the following categories:
- **Onboarding/How-To**: Basic usage questions about creating emails or configuring settings.
- **DNS Configuration**: Issues related to setting up TXT or other DNS records.
- **Receiving Emails/Setup**: Concerns about receiving emails properly via Resend.
- **Outage Investigation**: Addressing service interruptions affecting email delivery.
- **Rate Limiting Issues**: Problems arising from API rate limits.
- **Deliverability Issues**: Questions about emails going to spam folders or being flagged.
- **Migration Assistance**: Support for transitioning from other email providers like SendGrid.

---

### 2. **Prioritize**
Tickets were prioritized based on urgency and customer impact:
1. **Outages** (e.g., RES-7921) were addressed first due to high customer impact.
2. **DNS or Configuration Issues** (e.g., RES-1927, RES-5842) were handled next to unblock users.
3. **How-To Questions and Migrations** (e.g., RES-2984, RES-1348) were resolved last, as they are less time-sensitive.

---

### 3. **Process**
For each ticket:
1. **Investigate**: Gather detailed information, including logs and customer details.
2. **Diagnose**: Review relevant documentation and replicate the issue when possible.
3. **Respond**: Provide empathetic, clear, and actionable responses, including links to relevant resources or next steps.

---

### 4. **Respond**
Responses were tailored to each customer. Examples include:
- Providing step-by-step instructions or links to documentation for setup issues.
- Offering assurances and transparency for outages, along with resolutions or workarounds.
- Suggesting best practices for deliverability and email configuration.

---

### 5. **Escalate**
Critical issues (e.g., RES-3485, rate limiting) were escalated to engineering with detailed reproduction steps, impact, and proposed solutions.

---

## Notes

- The `customer-tasks.xlsx` file includes the full table with ticket details, labels, priorities, responses, and internal notes.
- Please refer to the escalation message above for the highlighted issue (Rate Limiting).
- Feel free to contact me if additional clarification is required.

