// Simulated function to be called after successful M-Pesa payment
function setSubscription(durationInDays) {
  const subscriptionEnd = new Date();
  subscriptionEnd.setDate(subscriptionEnd.getDate() + durationInDays);
  localStorage.setItem('subscriptionEnd', subscriptionEnd.toISOString());
  alert(`Subscription activated for ${durationInDays} day(s)!`);
  window.location.href = 'user/dashboard.html';
}

// Example usage (simulate button click after payment):
// setSubscription(14); // For 2 weeks
// setSubscription(7);  // For 1 week
// setSubscription(90); // For 3 months