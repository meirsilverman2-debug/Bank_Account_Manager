**Bank Account Manager**

# **תיאור הפרויקט**

בפרויקט זה תבנו מערכת לניהול חשבונות בנק . המערכת תרוץ ב-Terminal בלבד ותאפשר לנהל לקוחות, יתרות ופעולות בנקאיות שונות.

## **מטרת הפרויקט \- נושאים לתרגול**

* Variables

* Conditions

* Loops

* Functions

* Arrays

* Objects

* Array Methods

* Factory Functions

* Closures

* (Modules (Import / Export

# **מבנה הלקוח**

המערכת תנהל אוסף של לקוחות. לכל לקוח יהיו השדות הבאים:

| שדה | תיאור |
| ----- | ----- |
| id | מזהה ייחודי |
| fullName | שם מלא |
| accountType | סוג חשבון |
| balance | יתרה |
| isActive | האם החשבון פעיל |

## **סוגי חשבונות**

* Regular

* Premium

* Student

# **פעולות המערכת**

המערכת חייבת לתמוך בפעולות הבאות:

| פעולה | תיאור | קלט |
| ----- | ----- | ----- |
| Create Customer | יצירת לקוח חדש | שם, סוג חשבון, יתרה התחלתית |
| Show Customers | הצגת כל הלקוחות | ללא |
| Deposit | הפקדת כסף | מזהה לקוח, סכום |
| Withdraw | משיכת כסף | מזהה לקוח, סכום |
| Search Customer | חיפוש לקוח | מזהה או שם |
| Close Account | סגירת חשבון | מזהה לקוח |
| Show Statistics | הצגת סטטיסטיקות | ללא |

# **פירוט הפעולות**

## **1\. Create Customer**

יצירת לקוח חדש במערכת.

**בדיקות חובה:**

* שם לא ריק

* יתרה מספרית

* יתרה גדולה או שווה ל-0

* סוג חשבון תקין

**פלט:**

Customer created successfully

## **2\. Show Customers**

הצגת כל הלקוחות במערכת. יש להציג:

* ID

* Name

* Account Type

* Balance

* Status

## **3\. Deposit**

הפקדת כסף לחשבון.

**קלט:**

* Customer ID

* Amount

**בדיקות חובה:**

* לקוח קיים

* חשבון פעיל

* סכום גדול מ-0

**פלט:**

Deposit completed successfully

## **4\. Withdraw**

משיכת כסף מחשבון.

**קלט:**

* Customer ID

* Amount

**בדיקות חובה:**

* לקוח קיים

* חשבון פעיל

* סכום גדול מ-0

* קיימת יתרה מספקת

**פלט אפשרי:**

Withdraw completed successfully

Withdraw failed: insufficient balance

## **5\. Search Customer**

חיפוש לקוח לפי ID או שם. החיפוש לפי שם לא יהיה רגיש לאותיות גדולות/קטנות (case-insensitive).

## **6\. Close Account**

הפיכת החשבון ללא פעיל. לאחר סגירת החשבון:

* לא ניתן להפקיד כסף

* לא ניתן למשוך כסף

**פלט:**

Account closed successfully

## **7\. Show Statistics**

המערכת תחשב ותציג את הנתונים הבאים:

| נתון | תיאור |
| ----- | ----- |
| Total Customers | מספר לקוחות |
| Active Accounts | מספר חשבונות פעילים |
| Total Money | סך הכסף במערכת |
| Average Balance | ממוצע יתרות |
| Highest Balance | היתרה הגבוהה ביותר |

**פלט לדוגמה:**

\===== Statistics \=====

Total Customers: 5

Active Accounts: 4

Total Money: 25000

Average Balance: 5000

Highest Balance: 12000

# **דרישות JavaScript**

## **Array Methods \- חובה להשתמש לפחות ב-4:**

| Method | שימוש |
| ----- | ----- |
| find() | חיפוש לקוח בודד |
| filter() | סינון לקוחות לפי תנאי |
| map() | עיבוד ושינוי מערך לקוחות |
| reduce() | חישוב סטטיסטיקות |

## **String Methods \- חובה להשתמש לפחות ב-2:**

| Method | שימוש |
| ----- | ----- |
| trim() | ניקוי רווחים מהקלט |
| toLowerCase() | חיפוש לא רגיש לאותיות |

## **Factory Function**

יש ליצור Factory Function בשם createCustomer() שתחזיר אובייקט לקוח חדש

## **Closure \- יצירת מזהים אוטומטיים**

יש ליצור Closure עבור יצירת מזהים אוטומטיים (1, 2, 3, ...):

# **מבנה הקבצים**

הפרויקט יחולק לקבצים בצורה שנראת לכם לחלוקה נכונה צריך להיות כמובן קובץ ראשי שמריץ את הכל.

# **בונוס \- למסיימים מוקדם**

* Transfer Money \- העברת כסף בין חשבונות

* Save To JSON \- שמירת נתונים לקובץ JSON

* Read From JSON \- טעינת נתונים מקובץ JSON

* Console Menu באמצעות readline \- תפריט אינטראקטיבי

