<?php

header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);

    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed.'
    ]);

    exit;
}

$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!is_array($data)) {
    http_response_code(400);

    echo json_encode([
        'success' => false,
        'message' => 'Invalid request.'
    ]);

    exit;
}

$name = trim((string)($data['name'] ?? ''));
$email = trim((string)($data['email'] ?? ''));
$phone = trim((string)($data['phone'] ?? ''));
$subject = trim((string)($data['subject'] ?? ''));
$message = trim((string)($data['message'] ?? ''));
$language =
    (($data['language'] ?? 'sr') === 'en')
        ? 'en'
        : 'sr';

$website =
    trim((string)($data['website'] ?? ''));


/* Honeypot */

if ($website !== '') {
    echo json_encode([
        'success' => true
    ]);

    exit;
}


/* Validacija */

if (
    strlen($name) < 3 ||
    !filter_var(
        $email,
        FILTER_VALIDATE_EMAIL
    ) ||
    strlen($subject) < 3 ||
    strlen($message) < 10
) {
    http_response_code(422);

    echo json_encode([
        'success' => false,
        'message' => 'Invalid form data.'
    ]);

    exit;
}


if (
    $phone !== '' &&
    !preg_match(
        '/^[0-9+\s\/-]{6,20}$/',
        $phone
    )
) {
    http_response_code(422);

    echo json_encode([
        'success' => false,
        'message' => 'Invalid phone.'
    ]);

    exit;
}


function clean($value) {
    return htmlspecialchars(
        $value,
        ENT_QUOTES,
        'UTF-8'
    );
}


function emailSubject($value) {
    return
        '=?UTF-8?B?' .
        base64_encode($value) .
        '?=';
}


$to = 'office@mpms.rs';

$fromEmail =
    'office@mpms.rs';

$fromName =
    'MPM Construction Plus';


$safeName = clean($name);
$safeEmail = clean($email);

$safePhone =
    clean(
        $phone !== ''
            ? $phone
            : '—'
    );

$safeSubject =
    clean($subject);

$safeMessage =
    nl2br(
        clean($message)
    );


/* =========================================
   EMAIL KOJI STIŽE MPM-U
========================================= */

$adminHtml = '
<!DOCTYPE html>
<html lang="sr">

<body
style="
margin:0;
padding:0;
background:#f4f4f4;
"
>

<div
style="
max-width:760px;
margin:0 auto;
padding:30px 18px;
"
>

<div
style="
background:#ffffff;
border:1px solid #e7e7e7;
border-radius:12px;
overflow:hidden;
"
>

<div
style="
background:#151515;
padding:24px 28px;
border-bottom:3px solid #c40000;
"
>

<div
style="
font-family:Arial,Helvetica,sans-serif;
color:#ffffff;
font-size:24px;
font-weight:700;
"
>
MPM Construction Plus
</div>

<div
style="
font-family:Arial,Helvetica,sans-serif;
color:#dddddd;
font-size:14px;
margin-top:5px;
"
>
Novi upit sa kontakt forme
</div>

</div>


<div
style="
padding:28px;
font-family:Arial,Helvetica,sans-serif;
font-size:16px;
line-height:1.65;
color:#222222;
"
>

<p style="margin:0 0 22px;">
Primljena je nova poruka putem kontakt forme na sajtu.
</p>


<table
width="100%"
cellpadding="0"
cellspacing="0"
style="
border-collapse:collapse;
font-family:Arial,Helvetica,sans-serif;
font-size:15px;
"
>

<tr>
<th
align="left"
style="
width:30%;
padding:12px;
background:#971414;
color:#ffffff;
border:1px solid #dddddd;
"
>
Polje
</th>

<th
align="left"
style="
padding:12px;
background:#971414;
color:#ffffff;
border:1px solid #dddddd;
"
>
Vrednost
</th>
</tr>


<tr>
<td style="
padding:12px;
font-weight:700;
border:1px solid #dddddd;
">
Ime i prezime
</td>

<td style="
padding:12px;
border:1px solid #dddddd;
">
' . $safeName . '
</td>
</tr>


<tr>
<td style="
padding:12px;
font-weight:700;
border:1px solid #dddddd;
">
Email
</td>

<td style="
padding:12px;
border:1px solid #dddddd;
">
' . $safeEmail . '
</td>
</tr>


<tr>
<td style="
padding:12px;
font-weight:700;
border:1px solid #dddddd;
">
Telefon
</td>

<td style="
padding:12px;
border:1px solid #dddddd;
">
' . $safePhone . '
</td>
</tr>


<tr>
<td style="
padding:12px;
font-weight:700;
border:1px solid #dddddd;
">
Naslov
</td>

<td style="
padding:12px;
border:1px solid #dddddd;
">
' . $safeSubject . '
</td>
</tr>


<tr>
<td style="
padding:12px;
font-weight:700;
border:1px solid #dddddd;
vertical-align:top;
">
Poruka
</td>

<td style="
padding:12px;
border:1px solid #dddddd;
">
' . $safeMessage . '
</td>
</tr>

</table>

</div>

</div>
</div>

</body>
</html>
';


/* =========================================
   EMAIL KOJI DOBIJA KORISNIK
========================================= */

if ($language === 'en') {

    $userTitle =
        'Thank you for contacting us';

    $userIntro =
        'Your message has been successfully sent to MPM Construction Plus. We will get back to you as soon as possible.';

    $userSubject =
        'MPM Construction Plus - We received your message';

} else {

    $userTitle =
        'Hvala što ste nas kontaktirali';

    $userIntro =
        'Vaša poruka je uspešno poslata kompaniji MPM Construction Plus. Odgovorićemo vam u najkraćem mogućem roku.';

    $userSubject =
        'MPM Construction Plus - Vaša poruka je primljena';
}


$userHtml = '
<!DOCTYPE html>
<html>

<body
style="
margin:0;
padding:0;
background:#f4f4f4;
"
>

<div
style="
max-width:760px;
margin:0 auto;
padding:30px 18px;
"
>

<div
style="
background:#ffffff;
border:1px solid #e7e7e7;
border-radius:12px;
overflow:hidden;
"
>

<div
style="
background:#151515;
padding:24px 28px;
border-bottom:3px solid #c40000;
font-family:Arial,Helvetica,sans-serif;
color:white;
font-size:24px;
font-weight:700;
"
>
MPM Construction Plus
</div>


<div
style="
padding:28px;
font-family:Arial,Helvetica,sans-serif;
font-size:16px;
line-height:1.65;
color:#222222;
"
>

<h2
style="
margin-top:0;
font-size:24px;
"
>
' . clean($userTitle) . '
</h2>

<p>
' . clean($userIntro) . '
</p>

<p
style="
margin-top:25px;
color:#666666;
"
>
' . $safeName . '
</p>

</div>

</div>
</div>

</body>
</html>
';


/* =========================================
   HEADERS
========================================= */

$fromHeader =
    '=?UTF-8?B?' .
    base64_encode($fromName) .
    '?= <' .
    $fromEmail .
    '>';


$adminHeaders = [
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'From: ' . $fromHeader,
    'Reply-To: ' . $email
];


$userHeaders = [
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'From: ' . $fromHeader,
    'Reply-To: ' . $fromEmail
];


$adminSent =
    mail(
        $to,
        emailSubject(
            'Novi upit sa sajta - ' .
            $subject
        ),
        $adminHtml,
        implode(
            "\r\n",
            $adminHeaders
        )
    );


$userSent =
    mail(
        $email,
        emailSubject(
            $userSubject
        ),
        $userHtml,
        implode(
            "\r\n",
            $userHeaders
        )
    );


if (!$adminSent) {

    http_response_code(500);

    echo json_encode([
        'success' => false,
        'message' =>
            'Email could not be sent.'
    ]);

    exit;
}


echo json_encode([
    'success' => true,
    'confirmationSent' =>
        $userSent
]);