export const handler = async (event, context) => {
  // 1. SIKKERHETSSJEKK: Er brukeren logget inn via Netlify Identity?
  const { user } = context.clientContext;
  
  if (!user) {
    // Returner 401 Unauthorized hvis de ikke er logget inn
    return { statusCode: 401, body: "Ingen adgang. Du må være logget inn." };
  }

  // 2. Fortsett som normalt hvis brukeren er godkjent
  const buildHookUrl = process.env.BUILD_HOOK_URL;

  if (!buildHookUrl) {
    return { statusCode: 500, body: "Build hook URL mangler i Netlify." };
  }

  try {
    const response = await fetch(buildHookUrl, { method: "POST" });
    
    if (response.ok) {
      return { statusCode: 200, body: "Suksess! Nettsiden bygges nå." };
    } else {
      return { statusCode: response.status, body: "Klarte ikke starte bygget." };
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};