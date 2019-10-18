class EasyCurl {
    constructor(props) {
        native.init(this, !!(props && props.stream));
    }

    setOpt(option, val) {
        return native.setOpt(this, option, val);
    }

    addHeader(header){
        native.addHeader(this, header);
    }

    cancel(){
        native.cancel(this);
    }

    perform(callback) {
        return native.perform(this, callback);
    }
    
    static escape(str){
        return native.escape(str);
    }
}

module.exports = EasyCurl;
module.exports.EasyCurl = EasyCurl;

module.exports.CURLOPT_WRITEDATA = 10000 + 1;
module.exports.CURLOPT_URL = 10000 + 2;
module.exports.CURLOPT_PORT = 0 + 3;
module.exports.CURLOPT_PROXY = 10000 + 4;
module.exports.CURLOPT_USERPWD = 10000 + 5;
module.exports.CURLOPT_PROXYUSERPWD = 10000 + 6;
module.exports.CURLOPT_RANGE = 10000 + 7;
module.exports.CURLOPT_READDATA = 10000 + 9;
module.exports.CURLOPT_ERRORBUFFER = 10000 + 10;
module.exports.CURLOPT_WRITEFUNCTION = 20000 + 11;
module.exports.CURLOPT_READFUNCTION = 20000 + 12;
module.exports.CURLOPT_TIMEOUT = 0 + 13;
module.exports.CURLOPT_INFILESIZE = 0 + 14;
module.exports.CURLOPT_POSTFIELDS = 10000 + 15;
module.exports.CURLOPT_REFERER = 10000 + 16;
module.exports.CURLOPT_FTPPORT = 10000 + 17;
module.exports.CURLOPT_USERAGENT = 10000 + 18;
module.exports.CURLOPT_LOW_SPEED_LIMIT = 0 + 19;
module.exports.CURLOPT_LOW_SPEED_TIME = 0 + 20;
module.exports.CURLOPT_RESUME_FROM = 0 + 21;
module.exports.CURLOPT_COOKIE = 10000 + 22;
module.exports.CURLOPT_HTTPHEADER = 10000 + 23;
module.exports.CURLOPT_HTTPPOST = 10000 + 24;
module.exports.CURLOPT_SSLCERT = 10000 + 25;
module.exports.CURLOPT_KEYPASSWD = 10000 + 26;
module.exports.CURLOPT_CRLF = 0 + 27;
module.exports.CURLOPT_QUOTE = 10000 + 28;
module.exports.CURLOPT_HEADERDATA = 10000 + 29;
module.exports.CURLOPT_COOKIEFILE = 10000 + 31;
module.exports.CURLOPT_SSLVERSION = 0 + 32;
module.exports.CURLOPT_TIMECONDITION = 0 + 33;
module.exports.CURLOPT_TIMEVALUE = 0 + 34;
module.exports.CURLOPT_CUSTOMREQUEST = 10000 + 36;
module.exports.CURLOPT_STDERR = 10000 + 37;
module.exports.CURLOPT_POSTQUOTE = 10000 + 39;
module.exports.CURLOPT_OBSOLETE40 = 10000 + 40;
module.exports.CURLOPT_VERBOSE = 0 + 41;
module.exports.CURLOPT_HEADER = 0 + 42;
module.exports.CURLOPT_NOPROGRESS = 0 + 43;
module.exports.CURLOPT_NOBODY = 0 + 44;
module.exports.CURLOPT_FAILONERROR = 0 + 45;
module.exports.CURLOPT_UPLOAD = 0 + 46;
module.exports.CURLOPT_POST = 0 + 47;
module.exports.CURLOPT_DIRLISTONLY = 0 + 48;
module.exports.CURLOPT_APPEND = 0 + 50;
module.exports.CURLOPT_NETRC = 0 + 51;
module.exports.CURLOPT_FOLLOWLOCATION = 0 + 52;
module.exports.CURLOPT_TRANSFERTEXT = 0 + 53;
module.exports.CURLOPT_PUT = 0 + 54;
module.exports.CURLOPT_PROGRESSFUNCTION = 20000 + 56;
module.exports.CURLOPT_PROGRESSDATA = 10000 + 57;
module.exports.CURLOPT_AUTOREFERER = 0 + 58;
module.exports.CURLOPT_PROXYPORT = 0 + 59;
module.exports.CURLOPT_POSTFIELDSIZE = 0 + 60;
module.exports.CURLOPT_HTTPPROXYTUNNEL = 0 + 61;
module.exports.CURLOPT_INTERFACE = 10000 + 62;
module.exports.CURLOPT_KRBLEVEL = 10000 + 63;
module.exports.CURLOPT_SSL_VERIFYPEER = 0 + 64;
module.exports.CURLOPT_CAINFO = 10000 + 65;
module.exports.CURLOPT_MAXREDIRS = 0 + 68;
module.exports.CURLOPT_FILETIME = 0 + 69;
module.exports.CURLOPT_TELNETOPTIONS = 10000 + 70;
module.exports.CURLOPT_MAXCONNECTS = 0 + 71;
module.exports.CURLOPT_OBSOLETE72 = 0 + 72;
module.exports.CURLOPT_FRESH_CONNECT = 0 + 74;
module.exports.CURLOPT_FORBID_REUSE = 0 + 75;
module.exports.CURLOPT_RANDOM_FILE = 10000 + 76;
module.exports.CURLOPT_EGDSOCKET = 10000 + 77;
module.exports.CURLOPT_CONNECTTIMEOUT = 0 + 78;
module.exports.CURLOPT_HEADERFUNCTION = 20000 + 79;
module.exports.CURLOPT_HTTPGET = 0 + 80;
module.exports.CURLOPT_SSL_VERIFYHOST = 0 + 81;
module.exports.CURLOPT_COOKIEJAR = 10000 + 82;
module.exports.CURLOPT_SSL_CIPHER_LIST = 10000 + 83;
module.exports.CURLOPT_HTTP_VERSION = 0 + 84;
module.exports.CURLOPT_FTP_USE_EPSV = 0 + 85;
module.exports.CURLOPT_SSLCERTTYPE = 10000 + 86;
module.exports.CURLOPT_SSLKEY = 10000 + 87;
module.exports.CURLOPT_SSLKEYTYPE = 10000 + 88;
module.exports.CURLOPT_SSLENGINE = 10000 + 89;
module.exports.CURLOPT_SSLENGINE_DEFAULT = 0 + 90;
module.exports.CURLOPT_DNS_USE_GLOBAL_CACHE = 0 + 91;
module.exports.CURLOPT_DNS_CACHE_TIMEOUT = 0 + 92;
module.exports.CURLOPT_PREQUOTE = 10000 + 93;
module.exports.CURLOPT_DEBUGFUNCTION = 20000 + 94;
module.exports.CURLOPT_DEBUGDATA = 10000 + 95;
module.exports.CURLOPT_COOKIESESSION = 0 + 96;
module.exports.CURLOPT_CAPATH = 10000 + 97;
module.exports.CURLOPT_BUFFERSIZE = 0 + 98;
module.exports.CURLOPT_NOSIGNAL = 0 + 99;
module.exports.CURLOPT_SHARE = 10000 + 100;
module.exports.CURLOPT_PROXYTYPE = 0 + 101;
module.exports.CURLOPT_ACCEPT_ENCODING = 10000 + 102;
module.exports.CURLOPT_PRIVATE = 10000 + 103;
module.exports.CURLOPT_HTTP200ALIASES = 10000 + 104;
module.exports.CURLOPT_UNRESTRICTED_AUTH = 0 + 105;
module.exports.CURLOPT_FTP_USE_EPRT = 0 + 106;
module.exports.CURLOPT_HTTPAUTH = 0 + 107;
module.exports.CURLOPT_SSL_CTX_FUNCTION = 20000 + 108;
module.exports.CURLOPT_SSL_CTX_DATA = 10000 + 109;
module.exports.CURLOPT_FTP_CREATE_MISSING_DIRS = 0 + 110;
module.exports.CURLOPT_PROXYAUTH = 0 + 111;
module.exports.CURLOPT_FTP_RESPONSE_TIMEOUT = 0 + 112;
module.exports.CURLOPT_IPRESOLVE = 0 + 113;
module.exports.CURLOPT_MAXFILESIZE = 0 + 114;
module.exports.CURLOPT_INFILESIZE_LARGE = 30000 + 115;
module.exports.CURLOPT_RESUME_FROM_LARGE = 30000 + 116;
module.exports.CURLOPT_MAXFILESIZE_LARGE = 30000 + 117;
module.exports.CURLOPT_NETRC_FILE = 10000 + 118;
module.exports.CURLOPT_USE_SSL = 0 + 119;
module.exports.CURLOPT_POSTFIELDSIZE_LARGE = 30000 + 120;
module.exports.CURLOPT_TCP_NODELAY = 0 + 121;
module.exports.CURLOPT_FTPSSLAUTH = 0 + 129;
module.exports.CURLOPT_IOCTLFUNCTION = 20000 + 130;
module.exports.CURLOPT_IOCTLDATA = 10000 + 131;
module.exports.CURLOPT_FTP_ACCOUNT = 10000 + 134;
module.exports.CURLOPT_COOKIELIST = 10000 + 135;
module.exports.CURLOPT_IGNORE_CONTENT_LENGTH = 0 + 136;
module.exports.CURLOPT_FTP_SKIP_PASV_IP = 0 + 137;
module.exports.CURLOPT_FTP_FILEMETHOD = 0 + 138;
module.exports.CURLOPT_LOCALPORT = 0 + 139;
module.exports.CURLOPT_LOCALPORTRANGE = 0 + 140;
module.exports.CURLOPT_CONNECT_ONLY = 0 + 141;
module.exports.CURLOPT_CONV_FROM_NETWORK_FUNCTION = 20000 + 142;
module.exports.CURLOPT_CONV_TO_NETWORK_FUNCTION = 20000 + 143;
module.exports.CURLOPT_CONV_FROM_UTF8_FUNCTION = 20000 + 144;
module.exports.CURLOPT_MAX_SEND_SPEED_LARGE = 30000 + 145;
module.exports.CURLOPT_MAX_RECV_SPEED_LARGE = 30000 + 146;
module.exports.CURLOPT_FTP_ALTERNATIVE_TO_USER = 10000 + 147;
module.exports.CURLOPT_SOCKOPTFUNCTION = 20000 + 148;
module.exports.CURLOPT_SOCKOPTDATA = 10000 + 149;
module.exports.CURLOPT_SSL_SESSIONID_CACHE = 0 + 150;
module.exports.CURLOPT_SSH_AUTH_TYPES = 0 + 151;
module.exports.CURLOPT_SSH_PUBLIC_KEYFILE = 10000 + 152;
module.exports.CURLOPT_SSH_PRIVATE_KEYFILE = 10000 + 153;
module.exports.CURLOPT_FTP_SSL_CCC = 0 + 154;
module.exports.CURLOPT_TIMEOUT_MS = 0 + 155;
module.exports.CURLOPT_CONNECTTIMEOUT_MS = 0 + 156;
module.exports.CURLOPT_HTTP_TRANSFER_DECODING = 0 + 157;
module.exports.CURLOPT_HTTP_CONTENT_DECODING = 0 + 158;
module.exports.CURLOPT_NEW_FILE_PERMS = 0 + 159;
module.exports.CURLOPT_NEW_DIRECTORY_PERMS = 0 + 160;
module.exports.CURLOPT_POSTREDIR = 0 + 161;
module.exports.CURLOPT_SSH_HOST_PUBLIC_KEY_MD5 = 10000 + 162;
module.exports.CURLOPT_OPENSOCKETFUNCTION = 20000 + 163;
module.exports.CURLOPT_OPENSOCKETDATA = 10000 + 164;
module.exports.CURLOPT_COPYPOSTFIELDS = 10000 + 165;
module.exports.CURLOPT_PROXY_TRANSFER_MODE = 0 + 166;
module.exports.CURLOPT_SEEKFUNCTION = 20000 + 167;
module.exports.CURLOPT_SEEKDATA = 10000 + 168;
module.exports.CURLOPT_CRLFILE = 10000 + 169;
module.exports.CURLOPT_ISSUERCERT = 10000 + 170;
module.exports.CURLOPT_ADDRESS_SCOPE = 0 + 171;
module.exports.CURLOPT_CERTINFO = 0 + 172;
module.exports.CURLOPT_USERNAME = 10000 + 173;
module.exports.CURLOPT_PASSWORD = 10000 + 174;
module.exports.CURLOPT_PROXYUSERNAME = 10000 + 175;
module.exports.CURLOPT_PROXYPASSWORD = 10000 + 176;
module.exports.CURLOPT_NOPROXY = 10000 + 177;
module.exports.CURLOPT_TFTP_BLKSIZE = 0 + 178;
module.exports.CURLOPT_SOCKS5_GSSAPI_SERVICE = 10000 + 179;
module.exports.CURLOPT_SOCKS5_GSSAPI_NEC = 0 + 180;
module.exports.CURLOPT_PROTOCOLS = 0 + 181;
module.exports.CURLOPT_REDIR_PROTOCOLS = 0 + 182;
module.exports.CURLOPT_SSH_KNOWNHOSTS = 10000 + 183;
module.exports.CURLOPT_SSH_KEYFUNCTION = 20000 + 184;
module.exports.CURLOPT_SSH_KEYDATA = 10000 + 185;
module.exports.CURLOPT_MAIL_FROM = 10000 + 186;
module.exports.CURLOPT_MAIL_RCPT = 10000 + 187;
module.exports.CURLOPT_FTP_USE_PRET = 0 + 188;
module.exports.CURLOPT_RTSP_REQUEST = 0 + 189;
module.exports.CURLOPT_RTSP_SESSION_ID = 10000 + 190;
module.exports.CURLOPT_RTSP_STREAM_URI = 10000 + 191;
module.exports.CURLOPT_RTSP_TRANSPORT = 10000 + 192;
module.exports.CURLOPT_RTSP_CLIENT_CSEQ = 0 + 193;
module.exports.CURLOPT_RTSP_SERVER_CSEQ = 0 + 194;
module.exports.CURLOPT_INTERLEAVEDATA = 10000 + 195;
module.exports.CURLOPT_INTERLEAVEFUNCTION = 20000 + 196;
module.exports.CURLOPT_WILDCARDMATCH = 0 + 197;
module.exports.CURLOPT_CHUNK_BGN_FUNCTION = 20000 + 198;
module.exports.CURLOPT_CHUNK_END_FUNCTION = 20000 + 199;
module.exports.CURLOPT_FNMATCH_FUNCTION = 20000 + 200;
module.exports.CURLOPT_CHUNK_DATA = 10000 + 201;
module.exports.CURLOPT_FNMATCH_DATA = 10000 + 202;
module.exports.CURLOPT_RESOLVE = 10000 + 203;
module.exports.CURLOPT_TLSAUTH_USERNAME = 10000 + 204;
module.exports.CURLOPT_TLSAUTH_PASSWORD = 10000 + 205;
module.exports.CURLOPT_TLSAUTH_TYPE = 10000 + 206;
module.exports.CURLOPT_TRANSFER_ENCODING = 0 + 207;
module.exports.CURLOPT_CLOSESOCKETFUNCTION = 20000 + 208;
module.exports.CURLOPT_CLOSESOCKETDATA = 10000 + 209;
module.exports.CURLOPT_GSSAPI_DELEGATION = 0 + 210;
module.exports.CURLOPT_DNS_SERVERS = 10000 + 211;
module.exports.CURLOPT_ACCEPTTIMEOUT_MS = 0 + 212;
module.exports.CURLOPT_TCP_KEEPALIVE = 0 + 213;
module.exports.CURLOPT_TCP_KEEPIDLE = 0 + 214;
module.exports.CURLOPT_TCP_KEEPINTVL = 0 + 215;
module.exports.CURLOPT_SSL_OPTIONS = 0 + 216;
module.exports.CURLOPT_MAIL_AUTH = 10000 + 217;
module.exports.CURLOPT_SASL_IR = 0 + 218;
module.exports.CURLOPT_XFERINFOFUNCTION = 20000 + 219;
module.exports.CURLOPT_XOAUTH2_BEARER = 10000 + 220;
module.exports.CURLOPT_DNS_INTERFACE = 10000 + 221;
module.exports.CURLOPT_DNS_LOCAL_IP4 = 10000 + 222;
module.exports.CURLOPT_DNS_LOCAL_IP6 = 10000 + 223;
module.exports.CURLOPT_LOGIN_OPTIONS = 10000 + 224;
module.exports.CURLOPT_SSL_ENABLE_NPN = 0 + 225;
module.exports.CURLOPT_SSL_ENABLE_ALPN = 0 + 226;
module.exports.CURLOPT_EXPECT_100_TIMEOUT_MS = 0 + 227;
module.exports.CURLOPT_PROXYHEADER = 10000 + 228;
module.exports.CURLOPT_HEADEROPT = 0 + 229;
module.exports.CURLOPT_PINNEDPUBLICKEY = 10000 + 230;
module.exports.CURLOPT_UNIX_SOCKET_PATH = 10000 + 231;
module.exports.CURLOPT_SSL_VERIFYSTATUS = 0 + 232;
module.exports.CURLOPT_SSL_FALSESTART = 0 + 233;
module.exports.CURLOPT_PATH_AS_IS = 0 + 234;
module.exports.CURLOPT_PROXY_SERVICE_NAME = 10000 + 235;
module.exports.CURLOPT_SERVICE_NAME = 10000 + 236;
module.exports.CURLOPT_PIPEWAIT = 0 + 237;
module.exports.CURLOPT_DEFAULT_PROTOCOL = 10000 + 238;
module.exports.CURLOPT_STREAM_WEIGHT = 0 + 239;
module.exports.CURLOPT_STREAM_DEPENDS = 10000 + 240;
module.exports.CURLOPT_STREAM_DEPENDS_E = 10000 + 241;
module.exports.CURLOPT_TFTP_NO_OPTIONS = 0 + 242;
module.exports.CURLOPT_CONNECT_TO = 10000 + 243;
module.exports.CURLOPT_TCP_FASTOPEN = 0 + 244;
module.exports.CURLOPT_KEEP_SENDING_ON_ERROR = 0 + 245;
module.exports.CURLOPT_PROXY_CAINFO = 10000 + 246;
module.exports.CURLOPT_PROXY_CAPATH = 10000 + 247;
module.exports.CURLOPT_PROXY_SSL_VERIFYPEER = 0 + 248;
module.exports.CURLOPT_PROXY_SSL_VERIFYHOST = 0 + 249;
module.exports.CURLOPT_PROXY_SSLVERSION = 0 + 250;
module.exports.CURLOPT_PROXY_TLSAUTH_USERNAME = 10000 + 251;
module.exports.CURLOPT_PROXY_TLSAUTH_PASSWORD = 10000 + 252;
module.exports.CURLOPT_PROXY_TLSAUTH_TYPE = 10000 + 253;
module.exports.CURLOPT_PROXY_SSLCERT = 10000 + 254;
module.exports.CURLOPT_PROXY_SSLCERTTYPE = 10000 + 255;
module.exports.CURLOPT_PROXY_SSLKEY = 10000 + 256;
module.exports.CURLOPT_PROXY_SSLKEYTYPE = 10000 + 257;
module.exports.CURLOPT_PROXY_KEYPASSWD = 10000 + 258;
module.exports.CURLOPT_PROXY_SSL_CIPHER_LIST = 10000 + 259;
module.exports.CURLOPT_PROXY_CRLFILE = 10000 + 260;
module.exports.CURLOPT_PROXY_SSL_OPTIONS = 0 + 261;
module.exports.CURLOPT_PRE_PROXY = 10000 + 262;
module.exports.CURLOPT_PROXY_PINNEDPUBLICKEY = 10000 + 263;
module.exports.CURLOPT_ABSTRACT_UNIX_SOCKET = 10000 + 264;
module.exports.CURLOPT_SUPPRESS_CONNECT_HEADERS = 0 + 265;
module.exports.CURLOPT_REQUEST_TARGET = 10000 + 266;
module.exports.CURLOPT_SOCKS5_AUTH = 0 + 267;
module.exports.CURLOPT_SSH_COMPRESSION = 0 + 268;
module.exports.CURLOPT_MIMEPOST = 10000 + 269;
module.exports.CURLOPT_TIMEVALUE_LARGE = 30000 + 270;
module.exports.CURLOPT_HAPPY_EYEBALLS_TIMEOUT_MS = 0 + 271;
module.exports.CURLOPT_RESOLVER_START_FUNCTION = 20000 + 272;
module.exports.CURLOPT_RESOLVER_START_DATA = 10000 + 273;
module.exports.CURLOPT_HAPROXYPROTOCOL = 0 + 274;
module.exports.CURLOPT_DNS_SHUFFLE_ADDRESSES = 0 + 275;
module.exports.CURLOPT_TLS13_CIPHERS = 10000 + 276;
module.exports.CURLOPT_PROXY_TLS13_CIPHERS = 10000 + 277;
module.exports.CURLOPT_DISALLOW_USERNAME_IN_URL = 0 + 278;
module.exports.CURLOPT_DOH_URL = 10000 + 279;
module.exports.CURLOPT_UPLOAD_BUFFERSIZE = 0 + 280;
module.exports.CURLOPT_UPKEEP_INTERVAL_MS = 0 + 281;
module.exports.CURLOPT_CURLU = 10000 + 282;
module.exports.CURLOPT_TRAILERFUNCTION = 20000 + 283;
module.exports.CURLOPT_TRAILERDATA = 10000 + 284;
module.exports.CURLOPT_HTTP09_ALLOWED = 0 + 285;


