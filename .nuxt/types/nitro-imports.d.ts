declare global {
  const __buildAssetsURL: typeof import('../../node_modules/nuxt/dist/core/runtime/nitro/paths')['buildAssetsURL']
  const __publicAssetsURL: typeof import('../../node_modules/nuxt/dist/core/runtime/nitro/paths')['publicAssetsURL']
  const appendCorsHeaders: typeof import('../../node_modules/h3')['appendCorsHeaders']
  const appendCorsPreflightHeaders: typeof import('../../node_modules/h3')['appendCorsPreflightHeaders']
  const appendHeader: typeof import('../../node_modules/h3')['appendHeader']
  const appendHeaders: typeof import('../../node_modules/h3')['appendHeaders']
  const appendResponseHeader: typeof import('../../node_modules/h3')['appendResponseHeader']
  const appendResponseHeaders: typeof import('../../node_modules/h3')['appendResponseHeaders']
  const assertMethod: typeof import('../../node_modules/h3')['assertMethod']
  const cachedEventHandler: typeof import('../../node_modules/nitropack/dist/runtime')['cachedEventHandler']
  const cachedFunction: typeof import('../../node_modules/nitropack/dist/runtime')['cachedFunction']
  const callNodeListener: typeof import('../../node_modules/h3')['callNodeListener']
  const clearResponseHeaders: typeof import('../../node_modules/h3')['clearResponseHeaders']
  const clearSession: typeof import('../../node_modules/h3')['clearSession']
  const clearUserSession: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/utils/session')['clearUserSession']
  const createApp: typeof import('../../node_modules/h3')['createApp']
  const createAppEventHandler: typeof import('../../node_modules/h3')['createAppEventHandler']
  const createError: typeof import('../../node_modules/h3')['createError']
  const createEvent: typeof import('../../node_modules/h3')['createEvent']
  const createEventStream: typeof import('../../node_modules/h3')['createEventStream']
  const createRouter: typeof import('../../node_modules/h3')['createRouter']
  const defaultContentType: typeof import('../../node_modules/h3')['defaultContentType']
  const defineAppConfig: typeof import('../../node_modules/nuxt/dist/core/runtime/nitro/config')['defineAppConfig']
  const defineCachedEventHandler: typeof import('../../node_modules/nitropack/dist/runtime')['defineCachedEventHandler']
  const defineCachedFunction: typeof import('../../node_modules/nitropack/dist/runtime')['defineCachedFunction']
  const defineEventHandler: typeof import('../../node_modules/h3')['defineEventHandler']
  const defineLazyEventHandler: typeof import('../../node_modules/h3')['defineLazyEventHandler']
  const defineNitroErrorHandler: typeof import('../../node_modules/nitropack/dist/runtime')['defineNitroErrorHandler']
  const defineNitroPlugin: typeof import('../../node_modules/nitropack/dist/runtime')['defineNitroPlugin']
  const defineNodeListener: typeof import('../../node_modules/h3')['defineNodeListener']
  const defineNodeMiddleware: typeof import('../../node_modules/h3')['defineNodeMiddleware']
  const defineRenderHandler: typeof import('../../node_modules/nitropack/dist/runtime')['defineRenderHandler']
  const defineRequestMiddleware: typeof import('../../node_modules/h3')['defineRequestMiddleware']
  const defineResponseMiddleware: typeof import('../../node_modules/h3')['defineResponseMiddleware']
  const defineTask: typeof import('../../node_modules/nitropack/dist/runtime')['defineTask']
  const defineWebSocket: typeof import('../../node_modules/h3')['defineWebSocket']
  const defineWebSocketHandler: typeof import('../../node_modules/h3')['defineWebSocketHandler']
  const deleteCookie: typeof import('../../node_modules/h3')['deleteCookie']
  const dynamicEventHandler: typeof import('../../node_modules/h3')['dynamicEventHandler']
  const eventHandler: typeof import('../../node_modules/h3')['eventHandler']
  const fetchWithEvent: typeof import('../../node_modules/h3')['fetchWithEvent']
  const fromNodeMiddleware: typeof import('../../node_modules/h3')['fromNodeMiddleware']
  const fromPlainHandler: typeof import('../../node_modules/h3')['fromPlainHandler']
  const fromWebHandler: typeof import('../../node_modules/h3')['fromWebHandler']
  const getCookie: typeof import('../../node_modules/h3')['getCookie']
  const getHeader: typeof import('../../node_modules/h3')['getHeader']
  const getHeaders: typeof import('../../node_modules/h3')['getHeaders']
  const getMethod: typeof import('../../node_modules/h3')['getMethod']
  const getProxyRequestHeaders: typeof import('../../node_modules/h3')['getProxyRequestHeaders']
  const getQuery: typeof import('../../node_modules/h3')['getQuery']
  const getRequestFingerprint: typeof import('../../node_modules/h3')['getRequestFingerprint']
  const getRequestHeader: typeof import('../../node_modules/h3')['getRequestHeader']
  const getRequestHeaders: typeof import('../../node_modules/h3')['getRequestHeaders']
  const getRequestHost: typeof import('../../node_modules/h3')['getRequestHost']
  const getRequestIP: typeof import('../../node_modules/h3')['getRequestIP']
  const getRequestPath: typeof import('../../node_modules/h3')['getRequestPath']
  const getRequestProtocol: typeof import('../../node_modules/h3')['getRequestProtocol']
  const getRequestURL: typeof import('../../node_modules/h3')['getRequestURL']
  const getRequestWebStream: typeof import('../../node_modules/h3')['getRequestWebStream']
  const getResponseHeader: typeof import('../../node_modules/h3')['getResponseHeader']
  const getResponseHeaders: typeof import('../../node_modules/h3')['getResponseHeaders']
  const getResponseStatus: typeof import('../../node_modules/h3')['getResponseStatus']
  const getResponseStatusText: typeof import('../../node_modules/h3')['getResponseStatusText']
  const getRouteRules: typeof import('../../node_modules/nitropack/dist/runtime')['getRouteRules']
  const getRouterParam: typeof import('../../node_modules/h3')['getRouterParam']
  const getRouterParams: typeof import('../../node_modules/h3')['getRouterParams']
  const getSession: typeof import('../../node_modules/h3')['getSession']
  const getUserSession: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/utils/session')['getUserSession']
  const getValidatedQuery: typeof import('../../node_modules/h3')['getValidatedQuery']
  const getValidatedRouterParams: typeof import('../../node_modules/h3')['getValidatedRouterParams']
  const handleCacheHeaders: typeof import('../../node_modules/h3')['handleCacheHeaders']
  const handleCors: typeof import('../../node_modules/h3')['handleCors']
  const isCorsOriginAllowed: typeof import('../../node_modules/h3')['isCorsOriginAllowed']
  const isError: typeof import('../../node_modules/h3')['isError']
  const isEvent: typeof import('../../node_modules/h3')['isEvent']
  const isEventHandler: typeof import('../../node_modules/h3')['isEventHandler']
  const isMethod: typeof import('../../node_modules/h3')['isMethod']
  const isPreflightRequest: typeof import('../../node_modules/h3')['isPreflightRequest']
  const isStream: typeof import('../../node_modules/h3')['isStream']
  const isWebResponse: typeof import('../../node_modules/h3')['isWebResponse']
  const lazyEventHandler: typeof import('../../node_modules/h3')['lazyEventHandler']
  const nitroPlugin: typeof import('../../node_modules/nitropack/dist/runtime')['nitroPlugin']
  const oauthAuth0EventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/auth0')['oauthAuth0EventHandler']
  const oauthBattledotnetEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/battledotnet')['oauthBattledotnetEventHandler']
  const oauthCognitoEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/cognito')['oauthCognitoEventHandler']
  const oauthDiscordEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/discord')['oauthDiscordEventHandler']
  const oauthFacebookEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/facebook')['oauthFacebookEventHandler']
  const oauthGitHubEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/github')['oauthGitHubEventHandler']
  const oauthGitLabEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/gitlab')['oauthGitLabEventHandler']
  const oauthGoogleEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/google')['oauthGoogleEventHandler']
  const oauthInstagramEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/instagram')['oauthInstagramEventHandler']
  const oauthKeycloakEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/keycloak')['oauthKeycloakEventHandler']
  const oauthLinkedInEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/linkedin')['oauthLinkedInEventHandler']
  const oauthMicrosoftEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/microsoft')['oauthMicrosoftEventHandler']
  const oauthPaypalEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/paypal')['oauthPaypalEventHandler']
  const oauthSpotifyEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/spotify')['oauthSpotifyEventHandler']
  const oauthSteamEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/steam')['oauthSteamEventHandler']
  const oauthTikTokEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/tiktok')['oauthTikTokEventHandler']
  const oauthTwitchEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/twitch')['oauthTwitchEventHandler']
  const oauthVKEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/vk')['oauthVKEventHandler']
  const oauthXEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/x')['oauthXEventHandler']
  const oauthXSUAAEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/xsuaa')['oauthXSUAAEventHandler']
  const oauthYandexEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/yandex')['oauthYandexEventHandler']
  const parseCookies: typeof import('../../node_modules/h3')['parseCookies']
  const promisifyNodeListener: typeof import('../../node_modules/h3')['promisifyNodeListener']
  const proxyRequest: typeof import('../../node_modules/h3')['proxyRequest']
  const readBody: typeof import('../../node_modules/h3')['readBody']
  const readFormData: typeof import('../../node_modules/h3')['readFormData']
  const readMultipartFormData: typeof import('../../node_modules/h3')['readMultipartFormData']
  const readRawBody: typeof import('../../node_modules/h3')['readRawBody']
  const readValidatedBody: typeof import('../../node_modules/h3')['readValidatedBody']
  const removeResponseHeader: typeof import('../../node_modules/h3')['removeResponseHeader']
  const replaceUserSession: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/utils/session')['replaceUserSession']
  const requireUserSession: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/utils/session')['requireUserSession']
  const runTask: typeof import('../../node_modules/nitropack/dist/runtime')['runTask']
  const sanitizeStatusCode: typeof import('../../node_modules/h3')['sanitizeStatusCode']
  const sanitizeStatusMessage: typeof import('../../node_modules/h3')['sanitizeStatusMessage']
  const sealSession: typeof import('../../node_modules/h3')['sealSession']
  const send: typeof import('../../node_modules/h3')['send']
  const sendError: typeof import('../../node_modules/h3')['sendError']
  const sendIterable: typeof import('../../node_modules/h3')['sendIterable']
  const sendNoContent: typeof import('../../node_modules/h3')['sendNoContent']
  const sendProxy: typeof import('../../node_modules/h3')['sendProxy']
  const sendRedirect: typeof import('../../node_modules/h3')['sendRedirect']
  const sendStream: typeof import('../../node_modules/h3')['sendStream']
  const sendWebResponse: typeof import('../../node_modules/h3')['sendWebResponse']
  const serveStatic: typeof import('../../node_modules/h3')['serveStatic']
  const sessionHooks: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/utils/session')['sessionHooks']
  const setCookie: typeof import('../../node_modules/h3')['setCookie']
  const setHeader: typeof import('../../node_modules/h3')['setHeader']
  const setHeaders: typeof import('../../node_modules/h3')['setHeaders']
  const setResponseHeader: typeof import('../../node_modules/h3')['setResponseHeader']
  const setResponseHeaders: typeof import('../../node_modules/h3')['setResponseHeaders']
  const setResponseStatus: typeof import('../../node_modules/h3')['setResponseStatus']
  const setUserSession: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/utils/session')['setUserSession']
  const splitCookiesString: typeof import('../../node_modules/h3')['splitCookiesString']
  const toEventHandler: typeof import('../../node_modules/h3')['toEventHandler']
  const toNodeListener: typeof import('../../node_modules/h3')['toNodeListener']
  const toPlainHandler: typeof import('../../node_modules/h3')['toPlainHandler']
  const toWebHandler: typeof import('../../node_modules/h3')['toWebHandler']
  const toWebRequest: typeof import('../../node_modules/h3')['toWebRequest']
  const unsealSession: typeof import('../../node_modules/h3')['unsealSession']
  const updateSession: typeof import('../../node_modules/h3')['updateSession']
  const useAppConfig: typeof import('../../node_modules/nitropack/dist/runtime')['useAppConfig']
  const useBase: typeof import('../../node_modules/h3')['useBase']
  const useEvent: typeof import('../../node_modules/nitropack/dist/runtime')['useEvent']
  const useNitroApp: typeof import('../../node_modules/nitropack/dist/runtime')['useNitroApp']
  const useRuntimeConfig: typeof import('../../node_modules/nitropack/dist/runtime')['useRuntimeConfig']
  const useSession: typeof import('../../node_modules/h3')['useSession']
  const useStorage: typeof import('../../node_modules/nitropack/dist/runtime')['useStorage']
  const writeEarlyHints: typeof import('../../node_modules/h3')['writeEarlyHints']
}
// for type re-export
declare global {
  // @ts-ignore
  export type { OAuthAuth0Config } from 'C:/Users/wayne/Desktop/Salutaris/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/auth0.d.ts'
  import('C:/Users/wayne/Desktop/Salutaris/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/auth0.d.ts')
  // @ts-ignore
  export type { OAuthBattledotnetConfig } from 'C:/Users/wayne/Desktop/Salutaris/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/battledotnet.d.ts'
  import('C:/Users/wayne/Desktop/Salutaris/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/battledotnet.d.ts')
  // @ts-ignore
  export type { OAuthCognitoConfig } from 'C:/Users/wayne/Desktop/Salutaris/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/cognito.d.ts'
  import('C:/Users/wayne/Desktop/Salutaris/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/cognito.d.ts')
  // @ts-ignore
  export type { OAuthDiscordConfig } from 'C:/Users/wayne/Desktop/Salutaris/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/discord.d.ts'
  import('C:/Users/wayne/Desktop/Salutaris/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/discord.d.ts')
  // @ts-ignore
  export type { OAuthFacebookConfig } from 'C:/Users/wayne/Desktop/Salutaris/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/facebook.d.ts'
  import('C:/Users/wayne/Desktop/Salutaris/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/facebook.d.ts')
  // @ts-ignore
  export type { OAuthGitHubConfig } from 'C:/Users/wayne/Desktop/Salutaris/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/github.d.ts'
  import('C:/Users/wayne/Desktop/Salutaris/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/github.d.ts')
  // @ts-ignore
  export type { OAuthGitLabConfig } from 'C:/Users/wayne/Desktop/Salutaris/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/gitlab.d.ts'
  import('C:/Users/wayne/Desktop/Salutaris/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/gitlab.d.ts')
  // @ts-ignore
  export type { OAuthGoogleConfig } from 'C:/Users/wayne/Desktop/Salutaris/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/google.d.ts'
  import('C:/Users/wayne/Desktop/Salutaris/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/google.d.ts')
  // @ts-ignore
  export type { OAuthInstagramConfig } from 'C:/Users/wayne/Desktop/Salutaris/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/instagram.d.ts'
  import('C:/Users/wayne/Desktop/Salutaris/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/instagram.d.ts')
  // @ts-ignore
  export type { OAuthKeycloakConfig } from 'C:/Users/wayne/Desktop/Salutaris/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/keycloak.d.ts'
  import('C:/Users/wayne/Desktop/Salutaris/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/keycloak.d.ts')
  // @ts-ignore
  export type { OAuthLinkedInConfig } from 'C:/Users/wayne/Desktop/Salutaris/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/linkedin.d.ts'
  import('C:/Users/wayne/Desktop/Salutaris/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/linkedin.d.ts')
  // @ts-ignore
  export type { OAuthMicrosoftConfig } from 'C:/Users/wayne/Desktop/Salutaris/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/microsoft.d.ts'
  import('C:/Users/wayne/Desktop/Salutaris/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/microsoft.d.ts')
  // @ts-ignore
  export type { OAuthPaypalConfig } from 'C:/Users/wayne/Desktop/Salutaris/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/paypal.d.ts'
  import('C:/Users/wayne/Desktop/Salutaris/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/paypal.d.ts')
  // @ts-ignore
  export type { OAuthSpotifyConfig } from 'C:/Users/wayne/Desktop/Salutaris/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/spotify.d.ts'
  import('C:/Users/wayne/Desktop/Salutaris/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/spotify.d.ts')
  // @ts-ignore
  export type { OAuthSteamConfig } from 'C:/Users/wayne/Desktop/Salutaris/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/steam.d.ts'
  import('C:/Users/wayne/Desktop/Salutaris/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/steam.d.ts')
  // @ts-ignore
  export type { OAuthTikTokConfig } from 'C:/Users/wayne/Desktop/Salutaris/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/tiktok.d.ts'
  import('C:/Users/wayne/Desktop/Salutaris/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/tiktok.d.ts')
  // @ts-ignore
  export type { OAuthTwitchConfig } from 'C:/Users/wayne/Desktop/Salutaris/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/twitch.d.ts'
  import('C:/Users/wayne/Desktop/Salutaris/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/twitch.d.ts')
  // @ts-ignore
  export type { OAuthVKConfig } from 'C:/Users/wayne/Desktop/Salutaris/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/vk.d.ts'
  import('C:/Users/wayne/Desktop/Salutaris/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/vk.d.ts')
  // @ts-ignore
  export type { OAuthXConfig } from 'C:/Users/wayne/Desktop/Salutaris/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/x.d.ts'
  import('C:/Users/wayne/Desktop/Salutaris/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/x.d.ts')
  // @ts-ignore
  export type { OAuthXSUAAConfig } from 'C:/Users/wayne/Desktop/Salutaris/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/xsuaa.d.ts'
  import('C:/Users/wayne/Desktop/Salutaris/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/xsuaa.d.ts')
  // @ts-ignore
  export type { OAuthYandexConfig } from 'C:/Users/wayne/Desktop/Salutaris/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/yandex.d.ts'
  import('C:/Users/wayne/Desktop/Salutaris/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/yandex.d.ts')
  // @ts-ignore
  export type { SessionHooks } from 'C:/Users/wayne/Desktop/Salutaris/node_modules/nuxt-auth-utils/dist/runtime/server/utils/session.d.ts'
  import('C:/Users/wayne/Desktop/Salutaris/node_modules/nuxt-auth-utils/dist/runtime/server/utils/session.d.ts')
}
export { defineCachedFunction, defineCachedEventHandler, cachedFunction, cachedEventHandler, useRuntimeConfig, useStorage, useNitroApp, defineNitroPlugin, nitroPlugin, defineRenderHandler, getRouteRules, useAppConfig, useEvent, defineTask, runTask, defineNitroErrorHandler } from '../../node_modules/nitropack/dist/runtime';
export { appendCorsHeaders, appendCorsPreflightHeaders, appendHeader, appendHeaders, appendResponseHeader, appendResponseHeaders, assertMethod, callNodeListener, clearResponseHeaders, clearSession, createApp, createAppEventHandler, createError, createEvent, createEventStream, createRouter, defaultContentType, defineEventHandler, defineLazyEventHandler, defineNodeListener, defineNodeMiddleware, defineRequestMiddleware, defineResponseMiddleware, defineWebSocket, defineWebSocketHandler, deleteCookie, dynamicEventHandler, eventHandler, fetchWithEvent, fromNodeMiddleware, fromPlainHandler, fromWebHandler, getCookie, getHeader, getHeaders, getMethod, getProxyRequestHeaders, getQuery, getRequestFingerprint, getRequestHeader, getRequestHeaders, getRequestHost, getRequestIP, getRequestPath, getRequestProtocol, getRequestURL, getRequestWebStream, getResponseHeader, getResponseHeaders, getResponseStatus, getResponseStatusText, getRouterParam, getRouterParams, getSession, getValidatedQuery, getValidatedRouterParams, handleCacheHeaders, handleCors, isCorsOriginAllowed, isError, isEvent, isEventHandler, isMethod, isPreflightRequest, isStream, isWebResponse, lazyEventHandler, parseCookies, promisifyNodeListener, proxyRequest, readBody, readFormData, readMultipartFormData, readRawBody, readValidatedBody, removeResponseHeader, sanitizeStatusCode, sanitizeStatusMessage, sealSession, send, sendError, sendIterable, sendNoContent, sendProxy, sendRedirect, sendStream, sendWebResponse, serveStatic, setCookie, setHeader, setHeaders, setResponseHeader, setResponseHeaders, setResponseStatus, splitCookiesString, toEventHandler, toNodeListener, toPlainHandler, toWebHandler, toWebRequest, unsealSession, updateSession, useBase, useSession, writeEarlyHints } from 'h3';
export { buildAssetsURL as __buildAssetsURL, publicAssetsURL as __publicAssetsURL } from '../../node_modules/nuxt/dist/core/runtime/nitro/paths';
export { defineAppConfig } from '../../node_modules/nuxt/dist/core/runtime/nitro/config';
export { oauthAuth0EventHandler } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/auth0';
export { oauthBattledotnetEventHandler } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/battledotnet';
export { oauthCognitoEventHandler } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/cognito';
export { oauthDiscordEventHandler } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/discord';
export { oauthFacebookEventHandler } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/facebook';
export { oauthGitHubEventHandler } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/github';
export { oauthGitLabEventHandler } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/gitlab';
export { oauthGoogleEventHandler } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/google';
export { oauthInstagramEventHandler } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/instagram';
export { oauthKeycloakEventHandler } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/keycloak';
export { oauthLinkedInEventHandler } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/linkedin';
export { oauthMicrosoftEventHandler } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/microsoft';
export { oauthPaypalEventHandler } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/paypal';
export { oauthSpotifyEventHandler } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/spotify';
export { oauthSteamEventHandler } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/steam';
export { oauthTikTokEventHandler } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/tiktok';
export { oauthTwitchEventHandler } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/twitch';
export { oauthVKEventHandler } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/vk';
export { oauthXEventHandler } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/x';
export { oauthXSUAAEventHandler } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/xsuaa';
export { oauthYandexEventHandler } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/yandex';
export { sessionHooks, getUserSession, setUserSession, replaceUserSession, clearUserSession, requireUserSession } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/utils/session';