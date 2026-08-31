document.addEventListener("DOMContentLoaded", function () {

  /* =========================================
     PREVENT DUPLICATE CHATBOT
  ========================================= */

  if (document.getElementById("chatButton")) {
    return;
  }


  /* =========================================
     CREATE CHATBOT
  ========================================= */

  const chatbot = document.createElement("div");

  chatbot.innerHTML = `

    <button
      class="kinesis-chat-button"
      id="chatButton"
      aria-label="Open KINESIS Assistant"
    >
      💬
    </button>


    <div class="kinesis-chat-box" id="chatBox">

      <div class="chat-header">

        <div>
          <strong>KINESIS Assistant</strong>
          <span>● Online</span>
        </div>

        <button
          id="closeChat"
          aria-label="Close chat"
        >
          ×
        </button>

      </div>


      <div class="chat-body">

        <!-- CHAT MESSAGES -->

        <div
          class="chat-messages"
          id="chatMessages"
        >

          <div class="bot-message">
            Hello! 👋 Welcome to KINESIS.<br>
            How can I help you today?
          </div>

        </div>


        <!-- QUICK QUESTIONS -->

        <div class="chat-options">

          <button
            class="quick-question"
            data-question="What is Kinesis?"
          >
            About Kinesis
          </button>


          <button
            class="quick-question"
            data-question="What is your mission and vision?"
          >
            Mission & Vision
          </button>


          <button
            class="quick-question"
            data-question="What are your advocacies?"
          >
            Our Advocacies
          </button>


          <button
            class="quick-question"
            data-question="What programs do you offer?"
          >
            Programs
          </button>


          <button
            class="quick-question"
            data-question="How can I contact Kinesis?"
          >
            Contact Us
          </button>

        </div>


        <!-- INPUT AREA -->

        <div class="chat-input-area">

          <input
            type="text"
            id="chatInput"
            placeholder="Ask KINESIS something..."
            autocomplete="off"
          >

          <button
            id="sendChat"
            aria-label="Send message"
          >
            ➤
          </button>

        </div>

      </div>

    </div>

  `;


  document.body.appendChild(chatbot);



  /* =========================================
     GET CHAT ELEMENTS
  ========================================= */

  const chatButton =
    document.getElementById("chatButton");

  const chatBox =
    document.getElementById("chatBox");

  const closeChat =
    document.getElementById("closeChat");

  const chatInput =
    document.getElementById("chatInput");

  const sendChat =
    document.getElementById("sendChat");

  const chatMessages =
    document.getElementById("chatMessages");

  const quickQuestions =
    document.querySelectorAll(".quick-question");



  /* =========================================
     OPEN CHAT
  ========================================= */

  chatButton.addEventListener(
    "click",
    function () {

      chatBox.style.display = "block";

      setTimeout(function () {
        chatInput.focus();
      }, 100);

    }
  );



  /* =========================================
     CLOSE CHAT
  ========================================= */

  closeChat.addEventListener(
    "click",
    function () {

      chatBox.style.display = "none";

    }
  );



  /* =========================================
     CHATBOT KNOWLEDGE
  ========================================= */

  function getBotResponse(question) {

    const q =
      question
        .toLowerCase()
        .trim();


    /* -----------------------------------------
       HELPER
    ----------------------------------------- */

    function hasAny(words) {

      return words.some(function (word) {

        return q.includes(word);

      });

    }



    /* =========================================
       GREETINGS
    ========================================= */

    const greetingWords = [
      "hello",
      "hi",
      "hey",
      "good morning",
      "good afternoon",
      "good evening"
    ];

    const isGreeting =
      greetingWords.some(function (greeting) {

        return (
          q === greeting ||
          q.startsWith(greeting + " ")
        );

      });


    if (isGreeting) {

      return `
        Hello! 👋 Welcome to KINESIS.

        <br><br>

        You can ask me about our organization,
        mission and vision, advocacies, programs,
        events, products, gallery, team,
        partnerships, or contact information.
      `;

    }



    /* =========================================
       MISSION AND VISION TOGETHER
    ========================================= */

    if (
      q.includes("mission") &&
      q.includes("vision")
    ) {

      return `
        <strong>Our Mission</strong><br>
        KINESIS is committed to planning,
        organizing, and executing meaningful
        events through systematic coordination,
        efficient movement management,
        communication, teamwork, evaluation,
        innovation, and professional practice.

        <br><br>

        <strong>Our Vision</strong><br>
        KINESIS envisions a future where
        Physical Education and the MICE industry
        converge to create dynamic experiences
        centered on movement, sport, and wellness.

        <br><br>

        <a href="mission-vision.html">
          Read our Mission & Vision →
        </a>
      `;

    }



    /* =========================================
       ABOUT KINESIS
    ========================================= */

    if (hasAny([

      "what is kinesis",
      "who is kinesis",
      "who are you",
      "about kinesis",
      "about your organization",
      "tell me about kinesis",
      "tell me about your organization",
      "what do you do",
      "what does kinesis do",
      "what is your organization"

    ])) {

      return `
        KINESIS is an organization focused on
        sports, Physical Education, movement,
        wellness, education, and professional
        event management.

        <br><br>

        Through programs, events, seminars,
        workshops, and practical experiences,
        KINESIS aims to create meaningful
        opportunities for learning,
        collaboration, and professional
        development.

        <br><br>

        <a href="about.html">
          Learn more about KINESIS →
        </a>
      `;

    }



    /* =========================================
       MISSION
    ========================================= */

    if (hasAny([

      "mission",
      "your purpose",
      "what is your purpose",
      "goal of kinesis",
      "what is your mission"

    ])) {

      return `
        KINESIS is committed to planning,
        organizing, and executing MICE events
        through systematic coordination,
        efficient movement management,
        clear communication, and teamwork.

        <br><br>

        We continuously improve our processes
        through evaluation, innovation, and
        professional practice.

        <br><br>

        <a href="mission-vision.html">
          Read our Mission & Vision →
        </a>
      `;

    }



    /* =========================================
       VISION
    ========================================= */

    if (hasAny([

      "vision",
      "future of kinesis",
      "what is your vision",
      "where is kinesis going"

    ])) {

      return `
        KINESIS envisions a future where
        Physical Education and the MICE industry
        converge to create dynamic events centered
        on movement, sport, and wellness.

        <br><br>

        We aspire to create meaningful experiences
        that promote well-being, collaboration,
        innovation, and excellence.

        <br><br>

        <a href="mission-vision.html">
          Read our Mission & Vision →
        </a>
      `;

    }



    /* =========================================
       ADVOCACIES
    ========================================= */

    if (hasAny([

      "advocacy",
      "advocacies",
      "what do you advocate",
      "what do you support",
      "what do you stand for",
      "causes"

    ])) {

      return `
        KINESIS advocates:

        <br><br>

        • Active Lifestyle & Wellness<br>
        • Sports Education<br>
        • Inclusive Participation<br>
        • Professional Event Management<br>
        • Community Engagement<br>
        • Continuous Learning

        <br><br>

        <a href="advocacies.html">
          Explore Our Advocacies →
        </a>
      `;

    }



    /* =========================================
       PROGRAMS
    ========================================= */

    if (hasAny([

      "program",
      "programs",
      "seminar",
      "seminars",
      "workshop",
      "workshops",
      "training",
      "activity",
      "activities",
      "what do you offer"

    ])) {

      return `
        KINESIS offers educational programs,
        seminars, workshops, practical training,
        sports-related activities, and other
        learning experiences.

        <br><br>

        These programs are designed to develop
        knowledge, skills, teamwork, confidence,
        and professional experience.

        <br><br>

        <a href="programs.html">
          View KINESIS Programs →
        </a>
      `;

    }



    /* =========================================
       EVENTS
    ========================================= */

    if (hasAny([

      "event",
      "events",
      "upcoming event",
      "upcoming events",
      "next event",
      "event schedule",
      "when is your event",
      "when is the event"

    ])) {

      return `
        You can find KINESIS activities,
        upcoming events, schedules, and event
        information on our Events page.

        <br><br>

        <a href="events.html">
          View Events →
        </a>
      `;

    }



    /* =========================================
       PRODUCTS
    ========================================= */

    if (hasAny([

      "product",
      "products",
      "merch",
      "merchandise",
      "shop",
      "items",
      "what do you sell"

    ])) {

      return `
        You can explore available KINESIS
        products and featured items on our
        Products page.

        <br><br>

        <a href="products.html">
          Explore Products →
        </a>
      `;

    }



    /* =========================================
       GALLERY
    ========================================= */

    if (hasAny([

      "gallery",
      "photos",
      "pictures",
      "images",
      "event photos",
      "event pictures"

    ])) {

      return `
        You can view photos and highlights
        from KINESIS programs, activities,
        and events in our Gallery.

        <br><br>

        <a href="gallery.html">
          View Gallery →
        </a>
      `;

    }



    /* =========================================
       TEAM
    ========================================= */

    if (hasAny([

      "team",
      "members",
      "officers",
      "who runs kinesis",
      "people behind kinesis",
      "who are your members",
      "who are your officers"

    ])) {

      return `
        You can learn more about the people
        behind KINESIS on our Our Team page.

        <br><br>

        <a href="team.html">
          Meet Our Team →
        </a>
      `;

    }



    /* =========================================
       PARTNERSHIPS
    ========================================= */

    if (hasAny([

      "partner",
      "partnership",
      "partnerships",
      "collaboration",
      "collaborate",
      "sponsor",
      "sponsorship",
      "work with kinesis",
      "partner with kinesis"

    ])) {

      return `
        KINESIS welcomes inquiries regarding
        partnerships, collaborations,
        sponsorships, and organizational
        opportunities.

        <br><br>

        If your organization would like to
        work with KINESIS, you may contact us
        through our Contact page.

        <br><br>

        <a href="contact.html">
          Send us an inquiry →
        </a>
      `;

    }



    /* =========================================
       CONTACT
    ========================================= */

    if (hasAny([

      "contact",
      "contact you",
      "email",
      "phone",
      "message",
      "inquiry",
      "inquiries",
      "reach you",
      "how can i contact",
      "how do i contact"

    ])) {

      return `
        You can reach KINESIS through our
        Contact page for inquiries,
        collaborations, partnerships,
        sponsorships, and other concerns.

        <br><br>

        <a href="contact.html">
          Contact KINESIS →
        </a>
      `;

    }



    /* =========================================
       THANK YOU
    ========================================= */

    if (hasAny([

      "thank you",
      "thanks",
      "thank u"

    ])) {

      return `
        You're welcome! 😊

        <br><br>

        Feel free to ask me another question
        about KINESIS.
      `;

    }



    /* =========================================
       GOODBYE
    ========================================= */

    if (hasAny([

      "goodbye",
      "bye",
      "see you",
      "see you later"

    ])) {

      return `
        Goodbye! 👋

        <br><br>

        Thank you for visiting KINESIS.
        We hope to see you again soon.
      `;

    }



    /* =========================================
       UNKNOWN QUESTION
    ========================================= */

    return `
      I'm sorry, I don't have an answer
      for that yet. 🤔

      <br><br>

      You can ask me about:

      <br><br>

      • About KINESIS<br>
      • Mission & Vision<br>
      • Advocacies<br>
      • Programs<br>
      • Events<br>
      • Products<br>
      • Gallery<br>
      • Our Team<br>
      • Partnerships<br>
      • Contact Information
    `;

  }



  /* =========================================
     SEND MESSAGE
  ========================================= */

  function sendMessage(question) {

    question = question.trim();


    /* EMPTY MESSAGE */

    if (question === "") {

      return;

    }



    /* =========================================
       USER MESSAGE
    ========================================= */

    const userMessage =
      document.createElement("div");

    userMessage.className =
      "user-message";

    userMessage.textContent =
      question;

    chatMessages.appendChild(
      userMessage
    );


    /* CLEAR INPUT */

    chatInput.value = "";


    /* SCROLL DOWN */

    chatMessages.scrollTop =
      chatMessages.scrollHeight;



    /* =========================================
       TYPING INDICATOR
    ========================================= */

    const typingMessage =
      document.createElement("div");

    typingMessage.className =
      "bot-message typing-message";


    typingMessage.innerHTML = `

      <span>
        KINESIS is typing
      </span>

      <span class="typing-dots">
        <i></i>
        <i></i>
        <i></i>
      </span>

    `;


    chatMessages.appendChild(
      typingMessage
    );


    chatMessages.scrollTop =
      chatMessages.scrollHeight;



    /* =========================================
       BOT RESPONSE
    ========================================= */

    setTimeout(function () {

      typingMessage.remove();


      const botMessage =
        document.createElement("div");


      botMessage.className =
        "bot-message";


      botMessage.innerHTML =
        getBotResponse(question);


      chatMessages.appendChild(
        botMessage
      );


      chatMessages.scrollTop =
        chatMessages.scrollHeight;

    }, 900);

  }



  /* =========================================
     SEND BUTTON
  ========================================= */

  sendChat.addEventListener(
    "click",
    function () {

      sendMessage(
        chatInput.value
      );

    }
  );



  /* =========================================
     ENTER KEY
  ========================================= */

  chatInput.addEventListener(
    "keydown",
    function (event) {

      if (event.key === "Enter") {

        event.preventDefault();

        sendMessage(
          chatInput.value
        );

      }

    }
  );



  /* =========================================
     QUICK QUESTIONS
  ========================================= */

  quickQuestions.forEach(
    function (button) {

      button.addEventListener(
        "click",
        function () {

          const question =
            button.getAttribute(
              "data-question"
            );


          sendMessage(
            question
          );

        }
      );

    }
  );



  /* =========================================
     ESC KEY CLOSES CHAT
  ========================================= */

  document.addEventListener(
    "keydown",
    function (event) {

      if (event.key === "Escape") {

        chatBox.style.display =
          "none";

      }

    }
  );


});