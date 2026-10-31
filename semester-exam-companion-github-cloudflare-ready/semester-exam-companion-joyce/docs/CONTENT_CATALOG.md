# Joyce Edition — Message and Prayer Catalogue

This file documents the app's intended emotional/content flow. The visible app reveals only the message appropriate to the current exam phase. It should not display any advance hint about the final after-exam congratulations.

## Daily message format

Every upcoming course has a different wish and Christian prayer. Messages are motivational and subject-themed, not course-syllabus advice. The full source strings are also available in `data/daily-wishes.json` and implemented in `assets/js/app.js`.

### GLT121 — Understanding, confidence and focus
**Wish:** My babe, may your thoughts be clear and your confidence steady. May every concept you have revised find its place when you need it, and may you recognise how capable you are.

**Prayer:** Heavenly Father, give Joyce understanding, focus and a peaceful mind. Help her recall what she has learned and approach each question with patience. Keep her safe and strengthen her. In Jesus’ name, Amen.

### CHM121 — Chemistry, accuracy and clear thinking
**Wish:** Joyce, may every formula, principle and careful step make sense today. May you stay calm, read each question well, and balance your time wisely. One question at a time, my love.

**Prayer:** Lord, grant Joyce clarity, accuracy and a steady hand. Help her remember her preparation, reason carefully, and remain peaceful under pressure. Bless the work of her hands. In Jesus’ name, Amen.

### BIO122 — Growth, understanding and recall
**Wish:** My babe, just as living things grow step by step, may your hard work bring you closer to your goals. May the details become clear, your memory serve you well, and your confidence keep growing.

**Prayer:** Father God, bless Joyce with a clear mind, good recall and patience as she writes. Let her preparation bear fruit, guard her peace, and guide her through the paper. In Jesus’ name, Amen.

### CHM102 — Careful reasoning and a balanced approach
**Wish:** May every part of today’s paper find you prepared. Take each question in order, think carefully, and trust the work you have put in. You have got this, Joyce.

**Prayer:** Dear Lord, be Joyce’s help and peace today. Give her wisdom to interpret questions, accuracy in her answers, and strength to finish well. Keep anxiety far from her heart. In Jesus’ name, Amen.

### GST121 — Knowledge, wisdom and thoughtful answers
**Wish:** My love, may the knowledge you have gathered come together clearly today. May your answers be thoughtful, your mind be organised, and your effort lead you toward the future you are working for.

**Prayer:** God of wisdom, guide Joyce’s understanding and expression. Help her remember what she studied, use her time wisely, and finish with a grateful heart. In Jesus’ name, Amen.

### GST124 — Clear expression and understanding
**Wish:** Joyce, may your ideas be clear, your reasoning strong, and your words express what you truly know. Keep a steady pace and give each question the attention it deserves.

**Prayer:** Heavenly Father, grant Joyce wisdom, composure and clear expression. Bless her preparation and help her approach every question with care. May she feel supported and peaceful. In Jesus’ name, Amen.

### GLT122 — Confidence, perseverance and progress
**Wish:** My babe, may today’s paper remind you how much you can accomplish through patience and effort. Keep your focus, trust your preparation, and let confidence walk beside you.

**Prayer:** Lord, renew Joyce’s strength and sharpen her understanding. Help her recall the right things at the right time, manage her minutes well, and leave the hall in peace. In Jesus’ name, Amen.

### BIO125 — Connecting concepts and remembering details
**Wish:** May the details connect, the concepts feel familiar, and your hard work show through. Breathe, take each question carefully, and remember that I’m cheering for you, Joyce.

**Prayer:** Father, give Joyce a calm heart, clear memory and careful understanding. Protect her wellbeing, bless her effort, and help her do the best she can. In Jesus’ name, Amen.

### PHY127 — Problem-solving, precision and patience
**Wish:** My babe, may each problem become a step you can work through with patience. Keep your units and workings clear, manage your time, and remember to breathe between questions.

**Prayer:** Lord, grant Joyce sound reasoning, accuracy and composure. Help her apply what she has learned, think clearly, and remain confident throughout the paper. In Jesus’ name, Amen.

### PHY121 — Clear reasoning and accurate calculations
**Wish:** Joyce, may every formula and idea you have practised come back to you when needed. Take your time, show your workings clearly where required, and keep believing in your preparation.

**Prayer:** Heavenly Father, bless Joyce with clarity, patience and careful reasoning. Help her work through the questions steadily and leave the exam with peace. In Jesus’ name, Amen.

### MTH121 — Mathematical reasoning, confidence and a steady mind
**Wish:** My babe, take each question one step at a time. May the methods you have practised come to mind, your calculations stay careful, and your confidence remain steady from the first question to the last.

**Prayer:** Lord, grant Joyce a peaceful heart, clear reasoning and accuracy. Help her manage her time wisely, remember what she has studied, and finish this paper safely and with gratitude. In Jesus’ name, Amen.

## Final-paper-day encouragement (before 11:00 AM WAT on 13 November 2026)

**Wish:** Joyce, I’m cheering you on today. Take a slow breath, read each question carefully, trust the preparation you’ve done, and manage your time steadily. Give it your best and leave the rest in God’s hands. I believe in you, my love.

**Prayer:** Heavenly Father, please grant Joyce wisdom, focus, clear memory, peace and strength. Guide her thoughts and answers, keep her safe on her journey, and steady her heart. May she finish with gratitude and peace. In Jesus’ name, Amen.

This remains a regular good-luck message and does not reveal the after-exam surprise.

## After-exam congratulations (after scheduled end at 11:00 AM WAT)

**Heading:** CONGRATULATIONS, MY BABE JOYCE AYENAJEH! 🎓💜

**Message:** My love, you made it through your scheduled examination timetable! I’m so proud of you. Take a deep breath, let yourself smile, and give yourself permission to rest. Whatever comes next, I hope you recognise the effort it took to reach this moment. You deserve to celebrate this milestone.

**Wish:** May your days ahead be peaceful, your results bring good news, and beautiful opportunities meet you on your path. May your effort bear good fruit, may your next chapter bring growth and happiness, and may life give you countless reasons to smile. Rest well, enjoy this moment, and remember how deeply you are loved.

**Prayer:** Heavenly Father, thank You for carrying Joyce through this examination season. As she awaits her results, calm every worry and fill her heart with peace. Bless the effort she has put in; may her results bring good news, and guide her towards opportunities that help her grow. Protect her health, renew her strength, surround her with kind people, and open doors according to Your good purpose for her life. Let this be the beginning of many beautiful testimonies. In Jesus’ name, Amen.

**Blessings:** May the Lord bless you and keep you; may He make His face shine upon you, be gracious unto you, and give you peace. May His favour go before you, wisdom guide you, grace sustain you, and joy meet you in the days ahead. May your heart be rested, your hope refreshed, your path protected, and your future filled with purpose.

**KJV Scripture:** “The LORD bless thee, and keep thee: The LORD make his face shine upon thee, and be gracious unto thee: The LORD lift up his countenance upon thee, and give thee peace.” — Numbers 6:24–26 (KJV)

**Closing:** With so much love and pride, always rooting for you. 💜

## Surprise-handling notes

- Before the last paper ends, use neutral/daily encouragement language only.
- Do not say that a surprise, celebration or final message is waiting.
- Do not show the final message text in the app's initial markup or calendar event description.
- At the programmed end time, change the visible card to the final congratulatory content.
- The source code contains the final strings because the app is static; anyone inspecting the source can technically read them. Keep the project source private if necessary.
