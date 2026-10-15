/**
 * Unnoise Smart Sleep Pillow - Interactive Application Logic (v2.0)
 * Features:
 * 1. Sleep Dashboard Simulator (Dynamic states & SVG circular score)
 * 2. Real-time Canvas Pulse Wave (ECG/BCG heart rate monitor)
 * 3. In-Browser Web Audio API Synthesis (Rain / Pink Noise / Breeze)
 * 4. Strava-Style Interactive Kudos & Community Interactions
 * 5. Pre-order Modal & Toast Notification
 * 6. Responsive Mobile Menu
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initDashboardSimulator();
  initPulseCanvas();
  initAudioTherapy();
  initStravaCommunity();
  initPreorderModal();
  initSmoothScroll();
});

/* ==========================================================================
   1. Sleep Dashboard Simulator
   ========================================================================== */
const sleepData = {
  restorative: {
    score: 92,
    scoreOffset: 18, // SVG dashoffset
    scoreColor: '#2563EB',
    bpm: 54,
    bpmStatus: 'จังหวะหัวใจสม่ำเสมอ พักผ่อนลึก',
    snoreDb: 12,
    snoreStatus: 'เงียบสงบ ไม่พบเสียงกรน',
    snoreColor: '#2563EB',
    pillowHeight: '+0.0 ซม. (ระดับปกติ)',
    deepPercent: '38%',
    remPercent: '24%',
    lightPercent: '32%',
    awakePercent: '6%',
    deepTime: '2 ชม. 45 นาที',
    remTime: '1 ชม. 45 นาที',
    lightTime: '2 ชม. 20 นาที',
    awakeTime: '25 นาที',
    totalSleep: '7 ชม. 15 นาที',
    coachTitle: 'การประเมินจาก Unnoise AI Sleep Coach: ยอดเยี่ยม',
    coachText: 'ตลอดการนอน 7 ชม. 15 นาที ร่างกายของคุณเข้าสู่สภาวะหลับลึก (Deep Sleep) ถึง 38% ซึ่งสูงกว่าเกณฑ์เฉลี่ยถึง 15% หมอนรองรับแนวกระดูกต้นคอได้สมดุล อุณหภูมิผิวสัมผัสคงที่ 24.8°C ไม่พบการตื่นกลางดึก'
  },
  restless: {
    score: 65,
    scoreOffset: 77, // SVG dashoffset
    scoreColor: '#EA580C',
    bpm: 72,
    bpmStatus: 'หัวใจเต้นเร็วช่วงตี 3 จากการพลิกตัว',
    snoreDb: 48,
    snoreStatus: 'ตรวจพบเสียงกรน (ระดับปานกลาง)',
    snoreColor: '#EA580C',
    pillowHeight: '+1.8 ซม. (ปรับยกเปิดทางเดินหายใจ)',
    deepPercent: '16%',
    remPercent: '18%',
    lightPercent: '51%',
    awakePercent: '15%',
    deepTime: '1 ชม. 05 นาที',
    remTime: '1 ชม. 15 นาที',
    lightTime: '3 ชม. 30 นาที',
    awakeTime: '1 ชม. 00 นาที',
    totalSleep: '6 ชม. 50 นาที',
    coachTitle: 'การประเมินจาก Unnoise AI Sleep Coach: ตรวจพบการกรนและทางเดินหายใจแคบ',
    coachText: 'เวลา 02:45 น. เซนเซอร์ตรวจจับเสียงกรน 48dB และรอบหายใจสะดุด หมอน Unnoise ได้ค่อยๆ พองถุงลมไมโครแอร์แบ็กยกความสูงขึ้น 1.8 ซม. อย่างนุ่มนวลเพื่อเปิดทางเดินหายใจ ช่วยให้เสียงกรนลดลงและกลับสู่การหายใจปกติ'
  }
};

let currentMode = 'restorative';

function initDashboardSimulator() {
  const modeBtns = document.querySelectorAll('.mode-btn');
  if (!modeBtns.length) return;

  modeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const mode = btn.getAttribute('data-mode');
      if (mode && sleepData[mode]) {
        currentMode = mode;
        updateDashboardView(sleepData[mode]);
      }
    });
  });

  // initial setup
  updateDashboardView(sleepData.restorative);
}

function updateDashboardView(data) {
  // Score dial
  const scoreNum = document.getElementById('dash-score-num');
  const scoreCircle = document.getElementById('dash-score-circle');
  if (scoreNum && scoreCircle) {
    animateValue(scoreNum, parseInt(scoreNum.textContent) || 0, data.score, 600);
    scoreCircle.style.strokeDashoffset = data.scoreOffset;
    scoreCircle.style.stroke = data.scoreColor;
  }

  // Heart Rate
  const bpmVal = document.getElementById('dash-bpm-val');
  const bpmSub = document.getElementById('dash-bpm-sub');
  if (bpmVal) animateValue(bpmVal, parseInt(bpmVal.textContent) || 0, data.bpm, 500);
  if (bpmSub) bpmSub.textContent = data.bpmStatus;

  // Snore
  const snoreVal = document.getElementById('dash-snore-val');
  const snoreSub = document.getElementById('dash-snore-sub');
  if (snoreVal) animateValue(snoreVal, parseInt(snoreVal.textContent) || 0, data.snoreDb, 500);
  if (snoreSub) {
    snoreSub.textContent = data.snoreStatus;
    snoreSub.style.color = data.snoreColor;
  }

  // Pillow adjustment
  const pillowAdj = document.getElementById('dash-pillow-adj');
  if (pillowAdj) pillowAdj.textContent = data.pillowHeight;

  // Stages bar
  const segDeep = document.getElementById('seg-deep');
  const segRem = document.getElementById('seg-rem');
  const segLight = document.getElementById('seg-light');
  const segAwake = document.getElementById('seg-awake');

  if (segDeep) segDeep.style.width = data.deepPercent;
  if (segRem) segRem.style.width = data.remPercent;
  if (segLight) segLight.style.width = data.lightPercent;
  if (segAwake) segAwake.style.width = data.awakePercent;

  // Legend times
  const timeDeep = document.getElementById('time-deep');
  const timeRem = document.getElementById('time-rem');
  const timeLight = document.getElementById('time-light');
  const timeAwake = document.getElementById('time-awake');
  if (timeDeep) timeDeep.textContent = `${data.deepPercent} (${data.deepTime})`;
  if (timeRem) timeRem.textContent = `${data.remPercent} (${data.remTime})`;
  if (timeLight) timeLight.textContent = `${data.lightPercent} (${data.lightTime})`;
  if (timeAwake) timeAwake.textContent = `${data.awakePercent} (${data.awakeTime})`;

  // Coach Insights
  const coachTitle = document.getElementById('dash-coach-title');
  const coachText = document.getElementById('dash-coach-text');
  if (coachTitle) coachTitle.textContent = data.coachTitle;
  if (coachText) coachText.textContent = data.coachText;
}

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

/* ==========================================================================
   2. Real-time Heart Rate Pulse Canvas
   ========================================================================== */
function initPulseCanvas() {
  const canvas = document.getElementById('pulse-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = canvas.parentElement.clientWidth || 200);
  let height = (canvas.height = 48);

  window.addEventListener('resize', () => {
    if (canvas.parentElement) {
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 48;
    }
  });

  let points = new Array(Math.floor(width / 2)).fill(height / 2);
  let step = 0;

  function renderWave() {
    step++;
    const speed = currentMode === 'restorative' ? 1.4 : 2.2;
    const isBeating = step % (currentMode === 'restorative' ? 45 : 30) < 6;

    let newY = height / 2;
    if (isBeating) {
      const beatOffset = step % (currentMode === 'restorative' ? 45 : 30);
      if (beatOffset === 1) newY = height / 2 - 4;
      else if (beatOffset === 2) newY = height / 2 - 18; // R peak
      else if (beatOffset === 3) newY = height / 2 + 12; // S valley
      else if (beatOffset === 4) newY = height / 2 - 6;  // T wave
    } else {
      // micro noise
      newY = height / 2 + (Math.random() - 0.5) * 1.5;
    }

    points.shift();
    points.push(newY);

    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = currentMode === 'restorative' ? '#2563EB' : '#EA580C';

    const dx = width / (points.length - 1);
    for (let i = 0; i < points.length; i++) {
      const x = i * dx;
      const y = points[i];
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    requestAnimationFrame(renderWave);
  }

  requestAnimationFrame(renderWave);
}

/* ==========================================================================
   3. In-Browser Web Audio API Synthesis
   ========================================================================== */
let audioCtx = null;
let noiseNode = null;
let gainNode = null;
let filterNode = null;
let isAudioPlaying = false;
let currentPreset = 'rain';

function initAudioTherapy() {
  const playBtn = document.getElementById('sound-play-btn');
  const soundBtns = document.querySelectorAll('.sound-btn');
  const volumeSlider = document.getElementById('volume-slider');
  const soundWaveCanvas = document.getElementById('sound-wave-canvas');

  if (!playBtn) return;

  // Preset buttons
  soundBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      soundBtns.forEach(b => {
        b.classList.remove('active');
        const icon = b.querySelector('.sound-state-icon i');
        if (icon) icon.className = 'bi bi-play';
      });
      btn.classList.add('active');
      const icon = btn.querySelector('.sound-state-icon i');
      if (icon) icon.className = 'bi bi-check2';

      currentPreset = btn.getAttribute('data-sound') || 'rain';
      if (isAudioPlaying) {
        startNoiseSound();
      }
    });
  });

  // Play / Pause Toggle
  playBtn.addEventListener('click', () => {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    if (!isAudioPlaying) {
      startNoiseSound();
      playBtn.innerHTML = '<i class="bi bi-pause-fill"></i>';
      playBtn.classList.add('playing');
      isAudioPlaying = true;
      showToast('กำลังเล่นเสียงบำบัดกลบเสียงรบกวน (Web Audio API)');
    } else {
      stopNoiseSound();
      playBtn.innerHTML = '<i class="bi bi-play-fill"></i>';
      playBtn.classList.remove('playing');
      isAudioPlaying = false;
    }
  });

  // Volume Slider
  if (volumeSlider) {
    volumeSlider.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      if (gainNode) {
        gainNode.gain.setValueAtTime(val, audioCtx.currentTime);
      }
    });
  }

  // Wave Visualizer
  initSoundWaveCanvas(soundWaveCanvas);
}

function startNoiseSound() {
  stopNoiseSound();
  if (!audioCtx) return;

  const bufferSize = audioCtx.sampleRate * 2;
  const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const output = buffer.getChannelData(0);

  if (currentPreset === 'rain') {
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.09;
      b6 = white * 0.115926;
    }
  } else if (currentPreset === 'pink') {
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99 * b0 + white * 0.05;
      b1 = 0.95 * b1 + white * 0.1;
      b2 = 0.85 * b2 + white * 0.25;
      b3 = 0.50 * b3 + white * 0.5;
      output[i] = (b0 + b1 + b2 + b3) * 0.08;
    }
  } else {
    let last = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      last = 0.96 * last + 0.04 * white;
      output[i] = last * 0.6;
    }
  }

  noiseNode = audioCtx.createBufferSource();
  noiseNode.buffer = buffer;
  noiseNode.loop = true;

  filterNode = audioCtx.createBiquadFilter();
  if (currentPreset === 'rain') {
    filterNode.type = 'lowpass';
    filterNode.frequency.value = 1400;
  } else if (currentPreset === 'pink') {
    filterNode.type = 'lowpass';
    filterNode.frequency.value = 900;
  } else {
    filterNode.type = 'bandpass';
    filterNode.frequency.value = 450;
    filterNode.Q.value = 1.2;
  }

  gainNode = audioCtx.createGain();
  const volumeSlider = document.getElementById('volume-slider');
  const initialVol = volumeSlider ? parseFloat(volumeSlider.value) : 0.4;
  gainNode.gain.setValueAtTime(initialVol, audioCtx.currentTime);

  noiseNode.connect(filterNode);
  filterNode.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  noiseNode.start();
}

function stopNoiseSound() {
  if (noiseNode) {
    try {
      noiseNode.stop();
      noiseNode.disconnect();
    } catch (e) {}
    noiseNode = null;
  }
}

function initSoundWaveCanvas(canvas) {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width = (canvas.width = canvas.parentElement.clientWidth || 280);
  let height = (canvas.height = 70);

  window.addEventListener('resize', () => {
    if (canvas.parentElement) {
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 70;
    }
  });

  let phase = 0;

  function draw() {
    ctx.clearRect(0, 0, width, height);

    if (isAudioPlaying) {
      phase += 0.08;
      ctx.beginPath();
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = '#2563EB';

      for (let x = 0; x < width; x++) {
        const y =
          height / 2 +
          Math.sin(x * 0.04 + phase) * 14 * Math.sin(x * 0.01) +
          Math.sin(x * 0.08 - phase * 1.5) * 6;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      ctx.beginPath();
      ctx.lineWidth = 1.2;
      ctx.strokeStyle = 'rgba(37, 99, 235, 0.3)';
      for (let x = 0; x < width; x++) {
        const y = height / 2 + Math.cos(x * 0.03 - phase) * 10;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    } else {
      ctx.beginPath();
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = '#CBD5E1';
      ctx.moveTo(0, height / 2);
      ctx.lineTo(width, height / 2);
      ctx.stroke();
    }

    requestAnimationFrame(draw);
  }

  requestAnimationFrame(draw);
}

/* ==========================================================================
   4. Strava-Style Community & Kudos Interaction (NEW)
   ========================================================================== */
function initStravaCommunity() {
  const kudosButtons = document.querySelectorAll('.kudos-btn');

  kudosButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const countSpan = btn.querySelector('.kudos-count');
      const icon = btn.querySelector('i');
      let count = parseInt(countSpan.textContent) || 0;

      if (!btn.classList.contains('active')) {
        btn.classList.add('active');
        count++;
        countSpan.textContent = count;
        if (icon) icon.className = 'bi bi-hand-thumbs-up-fill';
        showToast('ให้ Kudos เพื่อนสำเร็จ! 🎉 การนอนที่ดีคู่ควรกับเสียงปรบมือ');
      } else {
        btn.classList.remove('active');
        count--;
        countSpan.textContent = count;
        if (icon) icon.className = 'bi bi-hand-thumbs-up';
      }
    });
  });
}

/* ==========================================================================
   5. Pre-order / Reservation Modal
   ========================================================================== */
function initPreorderModal() {
  const modal = document.getElementById('preorder-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const openBtns = document.querySelectorAll('.open-order-btn');
  const modelSelect = document.getElementById('order-model');
  const summaryPrice = document.getElementById('summary-price');
  const summaryModel = document.getElementById('summary-model');
  const orderForm = document.getElementById('preorder-form');

  if (!modal) return;

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetModel = btn.getAttribute('data-model') || 'pro';
      if (modelSelect) modelSelect.value = targetModel;
      updateOrderSummary();
      modal.classList.add('active');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  if (modelSelect) {
    modelSelect.addEventListener('change', updateOrderSummary);
  }

  function updateOrderSummary() {
    if (!modelSelect || !summaryPrice || !summaryModel) return;
    if (modelSelect.value === 'essential') {
      summaryModel.textContent = 'Unnoise Essential (รุ่นมาตรฐาน)';
      summaryPrice.textContent = '฿4,990';
    } else {
      summaryModel.textContent = 'Unnoise Pro Sound & Air (รุ่นท็อปพร้อมระบบเสียง)';
      summaryPrice.textContent = '฿7,990';
    }
  }

  if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      modal.classList.remove('active');
      showToast('จองสิทธิ์ล่วงหน้าสำเร็จ! ข้อมูลโมเดลถูกบันทึกเรียบร้อย');
    });
  }
}

/* ==========================================================================
   6. Toast & Smooth Scroll & Mobile Menu
   ========================================================================== */
function showToast(message) {
  let toast = document.getElementById('toast-msg');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-msg';
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<i class="bi bi-check-circle-fill" style="color: #60A5FA;"></i> ${message}`;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-open');
    const icon = toggleBtn.querySelector('i');
    if (icon) {
      icon.className = navLinks.classList.contains('mobile-open') ? 'bi bi-x-lg' : 'bi bi-list';
    }
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('mobile-open');
      const icon = toggleBtn.querySelector('i');
      if (icon) icon.className = 'bi bi-list';
    });
  });
}
