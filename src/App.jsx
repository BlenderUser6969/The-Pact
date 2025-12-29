import React, { useState, useEffect, useRef } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { 
  getFirestore, collection, doc, setDoc, onSnapshot, 
  addDoc, updateDoc, serverTimestamp, Timestamp, query, orderBy
} from 'firebase/firestore';
import { 
  Lock, PenTool, CheckCircle, AlertCircle, 
  Link2, Scroll, ShieldCheck, Users, 
  Clock, Eye, Bell, ThumbsUp, XCircle, KeyRound,
  FileText, ExternalLink, Send, ChevronDown, ChevronUp,
  Skull, Upload, Handshake, AlertTriangle, Eraser, Download, Play
} from 'lucide-react';

// --- Firebase Config (Your Specific Keys) ---
const firebaseConfig = {
  apiKey: "AIzaSyDyAeeL97KNbjZgajcLostxNoOYWyYfsQ4",
  authDomain: "thepact-b80ae.firebaseapp.com",
  projectId: "thepact-b80ae",
  storageBucket: "thepact-b80ae.firebasestorage.app",
  messagingSenderId: "524158355276",
  appId: "1:524158355276:web:6ac0a6339212782551f1e9",
  measurementId: "G-SQWK4KE26X"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const appId = "thepact-production"; 

// --- Helper Components ---

const Button = ({ children, onClick, disabled, className = "", variant = "primary", type="button", size="md" }) => {
  const variants = {
    primary: "bg-slate-900 text-white hover:bg-slate-800 disabled:bg-slate-300 disabled:cursor-not-allowed",
    secondary: "bg-white text-slate-900 border-2 border-slate-900 hover:bg-slate-50 disabled:border-slate-300 disabled:text-slate-300",
    danger: "bg-red-50 text-red-600 border-2 border-red-100 hover:bg-red-100 disabled:opacity-50",
    success: "bg-green-600 text-white hover:bg-green-700 disabled:bg-green-300",
  };
  const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-lg"
  }
  return (
    <button 
      type={type}
      onClick={onClick} 
      disabled={disabled}
      className={`rounded-lg font-bold transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-xl shadow-xl border-2 border-slate-900 overflow-hidden ${className}`}>
    {children}
  </div>
);

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        <div className="bg-slate-100 p-4 border-b border-slate-200 flex justify-between items-center flex-shrink-0">
          <h3 className="font-bold text-lg text-slate-900">{title}</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600"><XCircle size={24} /></button>
        </div>
        <div className="p-6 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

const ProgressBar = ({ progress }) => (
    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
        <div 
            className="h-full bg-green-500 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
        />
    </div>
);

// --- Signature Pad Component ---
const SignaturePad = ({ onSave }) => {
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [hasDrawn, setHasDrawn] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            canvas.width = canvas.offsetWidth;
            canvas.height = 200;
            const ctx = canvas.getContext('2d');
            ctx.lineWidth = 2;
            ctx.lineCap = 'round';
            ctx.strokeStyle = '#0f172a';
        }
    }, []);

    const startDrawing = (e) => {
        const { offsetX, offsetY } = getCoordinates(e);
        const ctx = canvasRef.current.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(offsetX, offsetY);
        setIsDrawing(true);
    };

    const draw = (e) => {
        if (!isDrawing) return;
        const { offsetX, offsetY } = getCoordinates(e);
        const ctx = canvasRef.current.getContext('2d');
        ctx.lineTo(offsetX, offsetY);
        ctx.stroke();
        setHasDrawn(true);
    };

    const stopDrawing = () => {
        setIsDrawing(false);
        onSave(canvasRef.current.toDataURL());
    };

    const getCoordinates = (e) => {
        if (e.touches && e.touches[0]) {
            const rect = canvasRef.current.getBoundingClientRect();
            return {
                offsetX: e.touches[0].clientX - rect.left,
                offsetY: e.touches[0].clientY - rect.top
            };
        }
        return { offsetX: e.nativeEvent.offsetX, offsetY: e.nativeEvent.offsetY };
    };

    const clear = () => {
        const ctx = canvasRef.current.getContext('2d');
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        setHasDrawn(false);
        onSave(null);
    };

    return (
        <div className="relative">
            <canvas
                ref={canvasRef}
                className="w-full bg-slate-50 border-2 border-dashed border-slate-300 rounded-lg cursor-crosshair touch-none"
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                onTouchStart={startDrawing}
                onTouchMove={draw}
                onTouchEnd={stopDrawing}
            />
            {hasDrawn && (
                <button onClick={clear} className="absolute top-2 right-2 p-1 bg-white border border-slate-200 rounded text-slate-400 hover:text-red-500">
                    <Eraser size={16} />
                </button>
            )}
            {!hasDrawn && <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-slate-300 text-sm font-bold uppercase">Sign Here</div>}
        </div>
    );
};

// --- Main Application ---

export default function App() {
  const [user, setUser] = useState(null);
  const [contract, setContract] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [jointTasks, setJointTasks] = useState([]);
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState(null);

  // App State: 'profile' | 'lobby' | 'contract_room' | 'certificate' | 'dashboard'
  const [appState, setAppState] = useState('loading'); 
  const [myProfile, setMyProfile] = useState(null); // { name, email, pin }

  // Inputs & Helpers
  const [newTaskText, setNewTaskText] = useState("");
  const [viewTab, setViewTab] = useState("chain"); 
  const [isCreatingJoint, setIsCreatingJoint] = useState(false);
  const [jointTitle, setJointTitle] = useState("");
  const [selectedTask, setSelectedTask] = useState(null); 
  const [submissionNote, setSubmissionNote] = useState("");
  const [submissionLink, setSubmissionLink] = useState("");
  const [submissionFile, setSubmissionFile] = useState(null);
  
  // Lobby/Contract Inputs
  const [joinCode, setJoinCode] = useState("");
  const [draftTerms, setDraftTerms] = useState("We solemnly swear to keep the chain moving. If one fails, both fail.");
  
  const notesTimeoutRef = useRef(null);
  const lastNotifTimeRef = useRef(0);

  // --- Auth & Initialization ---
  useEffect(() => {
    const init = async () => {
        try {
            await signInAnonymously(auth);
        } catch (err) {
            setAuthError(err.message);
            setLoading(false);
        }
    };
    init();

    const subAuth = onAuthStateChanged(auth, (u) => {
        setUser(u);
        if (u) {
            // Check for local profile
            const localProfile = localStorage.getItem(`pact_profile_${appId}`);
            if (localProfile) {
                setMyProfile(JSON.parse(localProfile));
                // State will be determined by contract listener
            } else {
                setAppState('profile');
                setLoading(false);
            }
            requestNotificationPermission();
        }
    });
    return () => subAuth();
  }, []);

  // --- Data Listeners ---
  useEffect(() => {
    if (!user) return;

    const contractRef = doc(db, 'artifacts', appId, 'public', 'data', 'pact_meta', 'contract');
    const unsubContract = onSnapshot(contractRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setContract(data);
        if (!notesTimeoutRef.current) setNotes(data.notes || "");
        
        // State Transition Logic
        if (myProfile) {
            if (data.status === 'active') {
                const seenCert = sessionStorage.getItem(`pact_cert_seen_${appId}`);
                if (!seenCert) setAppState('certificate');
                else setAppState('dashboard');
            } else if (data.status === 'waiting' || data.status === 'signing') {
                setAppState('contract_room');
            } else {
                // If status is weird but doc exists, default to lobby
                setAppState('lobby'); 
            }
        }

        // Notifications
        if (data.notification && myProfile && (data.notification.toEmail === myProfile.email)) {
             const notifTime = data.notification.timestamp?.toMillis() || 0;
             if (notifTime > lastNotifTimeRef.current && (Date.now() - notifTime < 60000)) {
                 lastNotifTimeRef.current = notifTime;
                 showLocalNotification(data.notification.title, data.notification.body);
            }
        }
      } else {
        setContract(null);
        if (myProfile) setAppState('lobby');
        setLoading(false);
      }
    });

    const tasksQuery = query(collection(db, 'artifacts', appId, 'public', 'data', 'pact_tasks'), orderBy('createdAt', 'asc'));
    const unsubTasks = onSnapshot(tasksQuery, (snapshot) => {
      const allTasks = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTasks(allTasks.filter(t => t.type !== 'joint'));
      setJointTasks(allTasks.filter(t => t.type === 'joint'));
    });

    return () => { unsubContract(); unsubTasks(); };
  }, [user, myProfile]); // Depend on myProfile so we route correctly once created

  // --- Notifications ---
  const requestNotificationPermission = async () => {
    if (!("Notification" in window)) return;
    if (Notification.permission === "default") await Notification.requestPermission();
  };
  const showLocalNotification = (title, body) => {
    if (Notification.permission === "granted") {
      try { new Notification(title, { body, icon: 'https://cdn-icons-png.flaticon.com/512/2910/2910768.png' }); } catch (e) {}
    }
  };
  const triggerRemoteNotification = async (toEmail, title, body) => {
      await updateDoc(doc(db, 'artifacts', appId, 'public', 'data', 'pact_meta', 'contract'), {
          notification: { toEmail, title, body, timestamp: Timestamp.now() }
      });
  };

  // --- Logic & Actions ---

  const createProfile = (name, email, pin) => {
      const profile = { name, email, pin };
      localStorage.setItem(`pact_profile_${appId}`, JSON.stringify(profile));
      setMyProfile(profile);
      // Force update to lobby if contract doesn't exist yet
      if (!contract) setAppState('lobby');
  };

  const startContract = async () => {
      const code = Math.floor(100000 + Math.random() * 900000).toString();
      await setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'pact_meta', 'contract'), {
          host: { ...myProfile, signature: null },
          guest: null,
          terms: draftTerms,
          code: code,
          status: 'waiting', 
          createdAt: serverTimestamp(),
          notes: ""
      });
  };

  const joinContract = async () => {
      if (contract && contract.code === joinCode) {
          if (contract.status !== 'waiting') {
              alert("This contract is already in progress or closed.");
              return;
          }
          await updateDoc(doc(db, 'artifacts', appId, 'public', 'data', 'pact_meta', 'contract'), {
              guest: { ...myProfile, signature: null },
              status: 'signing'
          });
      } else {
          alert("Invalid Code or No Contract Found");
      }
  };

  const submitSignature = async (signatureData) => {
      const isHost = contract.host.email === myProfile.email;
      
      const updateData = {};
      if (isHost) updateData['host.signature'] = signatureData;
      else updateData['guest.signature'] = signatureData;

      // Check if this completes the pact
      const otherHasSigned = isHost ? contract.guest?.signature : contract.host?.signature;
      
      if (otherHasSigned) {
          updateData.status = 'active';
          updateData.signedAt = serverTimestamp();
      }

      await updateDoc(doc(db, 'artifacts', appId, 'public', 'data', 'pact_meta', 'contract'), updateData);
  };

  const enterDashboard = () => {
      sessionStorage.setItem(`pact_cert_seen_${appId}`, 'true');
      setAppState('dashboard');
  };

  // --- Derived Identity Logic ---
  const amIHost = contract?.host?.email === myProfile?.email;
  const myRoleKey = amIHost ? 'userA' : 'userB'; 
  const partnerRoleKey = amIHost ? 'userB' : 'userA';
  const myRoleName = amIHost ? contract?.host?.name : contract?.guest?.name;

  // Task Actions Wrapper
  const addSoloTask = async (e) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;
    await addDoc(collection(db, 'artifacts', appId, 'public', 'data', 'pact_tasks'), {
      text: newTaskText,
      creator: myRoleKey, creatorName: myRoleName,
      status: 'open', type: 'solo', checklist: [], rejectionCount: 0, createdAt: serverTimestamp()
    });
    setNewTaskText("");
    const partnerEmail = amIHost ? contract.guest.email : contract.host.email;
    triggerRemoteNotification(partnerEmail, "New Chain Link", `${myRoleName} added a task.`);
  };

  const proposeJointTask = async () => {
      if (!jointTitle.trim()) return;
      const partnerEmail = amIHost ? contract.guest.email : contract.host.email;
      await addDoc(collection(db, 'artifacts', appId, 'public', 'data', 'pact_tasks'), {
          text: jointTitle, creator: 'joint', creatorName: 'JOINT MISSION',
          status: 'proposed', type: 'joint', checklist: [],
          approvals: { [myRoleKey]: true, [partnerRoleKey]: false },
          initiator: myRoleKey, createdAt: serverTimestamp()
      });
      setIsCreatingJoint(false); setJointTitle("");
      triggerRemoteNotification(partnerEmail, "Mission Proposal", `${myRoleName} proposed a joint mission.`);
  };

  const signJointProposal = async (task) => {
      const taskRef = doc(db, 'artifacts', appId, 'public', 'data', 'pact_tasks', task.id);
      const newApprovals = { ...task.approvals, [myRoleKey]: true };
      const isNowLive = newApprovals.userA && newApprovals.userB;
      await updateDoc(taskRef, { approvals: newApprovals, status: isNowLive ? 'open' : 'proposed' });
      if (isNowLive) {
          const partnerEmail = amIHost ? contract.guest.email : contract.host.email;
          triggerRemoteNotification(partnerEmail, "Mission Active", "Joint operation authorized.");
      }
  };

  const submitTask = async () => {
      const taskRef = doc(db, 'artifacts', appId, 'public', 'data', 'pact_tasks', selectedTask.id);
      await updateDoc(taskRef, { status: 'pending', submittedAt: serverTimestamp(), submission: { note: submissionNote, link: submissionLink, file: submissionFile } });
      setSelectedTask(null);
      const partnerEmail = amIHost ? contract.guest.email : contract.host.email;
      triggerRemoteNotification(partnerEmail, "Task Submitted", `${myRoleName} turned in work.`);
  };

  const approveTask = async () => {
      const taskRef = doc(db, 'artifacts', appId, 'public', 'data', 'pact_tasks', selectedTask.id);
      if (selectedTask.type === 'joint') {
          const sigs = selectedTask.completionSignatures || { userA: false, userB: false };
          const newSigs = { ...sigs, [myRoleKey]: true };
          let newStatus = selectedTask.status;
          if (newSigs.userA && newSigs.userB) newStatus = 'completed';
          await updateDoc(taskRef, { completionSignatures: newSigs, status: newStatus });
      } else {
          await updateDoc(taskRef, { status: 'completed', completedAt: serverTimestamp(), approvedBy: myRoleKey });
          triggerRemoteNotification(amIHost ? contract.guest.email : contract.host.email, "Approved!", "The chain moves forward.");
      }
      setSelectedTask(null);
  };

  // --- VIEWS ---

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-slate-50"><div className="animate-spin text-4xl">⛓️</div></div>;
  if (authError) return <div className="p-8 text-center"><AlertTriangle className="mx-auto text-red-500 mb-4"/><h2 className="font-bold">Auth Error</h2><p className="text-sm">{authError}</p></div>;

  // 1. PROFILE SETUP
  if (appState === 'profile') {
      return (
          <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
              <Card className="max-w-md w-full p-8">
                  <ShieldCheck className="w-16 h-16 mx-auto text-slate-900 mb-6" />
                  <h1 className="text-2xl font-black text-center mb-6">Create Identity</h1>
                  <form onSubmit={(e) => {
                      e.preventDefault();
                      const formData = new FormData(e.target);
                      createProfile(formData.get('name'), formData.get('email'), formData.get('pin'));
                  }} className="space-y-4">
                      <div><label className="text-xs font-bold uppercase text-slate-500">Codename</label><input name="name" required className="w-full border-2 border-slate-200 rounded-lg p-3 font-bold" placeholder="e.g. Shadow" /></div>
                      <div><label className="text-xs font-bold uppercase text-slate-500">Email (ID)</label><input name="email" type="email" required className="w-full border-2 border-slate-200 rounded-lg p-3" placeholder="you@email.com" /></div>
                      <div><label className="text-xs font-bold uppercase text-slate-500">Security PIN</label><input name="pin" type="password" maxLength={4} required className="w-full border-2 border-slate-200 rounded-lg p-3 tracking-widest font-mono" placeholder="••••" /></div>
                      <Button type="submit" className="w-full py-4 text-lg">Initialize Identity</Button>
                  </form>
              </Card>
          </div>
      );
  }

  // 2. LOBBY
  if (appState === 'lobby') {
      return (
          <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
              <div className="max-w-md w-full space-y-6">
                  <div className="text-center">
                      <h1 className="text-4xl font-black text-slate-900 mb-2">THE PACT</h1>
                      <p className="text-slate-500">Welcome, {myProfile.name}. Choose your path.</p>
                  </div>
                  <div className="grid gap-4">
                      <Card className="p-6 hover:border-yellow-500 transition-colors cursor-pointer" onClick={startContract}>
                          <PenTool className="w-10 h-10 mb-4 text-slate-900" />
                          <h2 className="text-xl font-bold mb-2">Draft New Pact</h2>
                          <p className="text-sm text-slate-500">Start a new contract and invite a partner.</p>
                      </Card>
                      <Card className="p-6 hover:border-blue-500 transition-colors cursor-pointer">
                          <Handshake className="w-10 h-10 mb-4 text-slate-900" />
                          <h2 className="text-xl font-bold mb-2">Join Pact</h2>
                          <p className="text-sm text-slate-500 mb-4">Enter the 6-digit code from your partner.</p>
                          <div className="flex gap-2">
                              <input value={joinCode} onChange={e => setJoinCode(e.target.value)} maxLength={6} className="flex-1 border-2 border-slate-200 rounded-lg p-2 text-center font-mono font-bold tracking-widest uppercase" placeholder="CODE" />
                              <Button onClick={joinContract}>Join</Button>
                          </div>
                      </Card>
                  </div>
              </div>
          </div>
      );
  }

  // 3. CONTRACT ROOM
  if (appState === 'contract_room') {
      const isHost = contract.host.email === myProfile.email;
      const partner = isHost ? contract.guest : contract.host;
      const iHaveSigned = isHost ? contract.host.signature : contract.guest?.signature;

      return (
          <div className="min-h-screen bg-slate-50 p-4 pb-20 overflow-y-auto">
              <div className="max-w-2xl mx-auto bg-white shadow-2xl min-h-[800px] relative border border-slate-200">
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/cream-paper.png")` }}></div>
                  <div className="p-12 border-b-2 border-slate-900 text-center">
                      <h1 className="text-4xl font-serif font-black uppercase tracking-widest mb-4">Official Pact</h1>
                      <div className="flex justify-center gap-8 mt-6 font-bold text-lg">
                          <div className="border-b-2 border-slate-300 px-4 pb-1 min-w-[150px]">{contract.host.name}</div>
                          <div className="font-serif italic text-slate-400">&</div>
                          <div className={`border-b-2 px-4 pb-1 min-w-[150px] ${!partner ? 'text-slate-300 italic border-dashed' : 'border-slate-300'}`}>
                              {partner ? partner.name : "Waiting..."}
                          </div>
                      </div>
                  </div>
                  <div className="p-12 space-y-8">
                      {isHost && !contract.guest && (
                          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded text-center">
                              <h3 className="font-bold text-yellow-800 mb-2">Waiting for Partner</h3>
                              <p className="text-sm text-yellow-700 mb-4">Share this code with your friend to join:</p>
                              <div className="text-5xl font-mono font-black tracking-widest text-slate-900 bg-white inline-block px-6 py-4 rounded border-2 border-slate-900 border-dashed">{contract.code}</div>
                          </div>
                      )}
                      <div>
                          <h3 className="font-serif font-bold uppercase text-slate-400 text-sm mb-4">Terms of Agreement</h3>
                          {isHost && !contract.guest ? (
                              <textarea value={draftTerms} onChange={(e) => { setDraftTerms(e.target.value); updateDoc(doc(db, 'artifacts', appId, 'public', 'data', 'pact_meta', 'contract'), { terms: e.target.value }); }} className="w-full h-32 border-2 border-slate-200 p-4 font-serif text-lg leading-relaxed focus:border-slate-900 outline-none resize-none" />
                          ) : (
                              <div className="font-serif text-xl leading-relaxed text-slate-800">{contract.terms}</div>
                          )}
                      </div>
                      {(contract.guest || !isHost) && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 mt-8 border-t-2 border-slate-100">
                              <div><div className="h-32 border-b-2 border-slate-900 mb-2 flex items-end justify-center">{contract.host.signature ? <img src={contract.host.signature} alt="Host Sig" className="max-h-24" /> : <span className="text-slate-300 text-sm italic pb-2">Pending...</span>}</div><p className="text-center font-serif text-sm uppercase tracking-widest">{contract.host.name} (Host)</p></div>
                              <div><div className="h-32 border-b-2 border-slate-900 mb-2 flex items-end justify-center">{contract.guest?.signature ? <img src={contract.guest.signature} alt="Guest Sig" className="max-h-24" /> : <span className="text-slate-300 text-sm italic pb-2">Pending...</span>}</div><p className="text-center font-serif text-sm uppercase tracking-widest">{partner ? partner.name : "Partner"} (Partner)</p></div>
                          </div>
                      )}
                  </div>
                  {partner && !iHaveSigned && (
                      <div className="p-8 bg-slate-50 border-t border-slate-200">
                          <h3 className="font-bold text-center mb-4">Draw your signature to accept</h3>
                          <SignaturePad onSave={submitSignature} />
                      </div>
                  )}
              </div>
          </div>
      );
  }

  // 4. CERTIFICATE
  if (appState === 'certificate') {
      return (
          <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4">
              <div className="max-w-2xl w-full bg-white p-2 rounded-lg shadow-2xl animate-in zoom-in duration-500">
                  <div className="border-4 border-double border-slate-900 p-8 text-center relative overflow-hidden">
                      <div className="absolute top-4 right-4"><ShieldCheck size={48} className="text-slate-200" /></div>
                      <h1 className="text-5xl font-serif font-black mb-2 uppercase">It Is Done</h1>
                      <div className="w-full h-1 bg-slate-900 mb-8"></div>
                      <p className="font-serif text-xl italic mb-8">The pact between <strong className="uppercase">{contract.host.name}</strong> and <strong className="uppercase">{contract.guest.name}</strong> is sealed.</p>
                      <div className="flex justify-center gap-12 mb-8 opacity-70"><img src={contract.host.signature} className="h-16" alt="Sig A" /><img src={contract.guest.signature} className="h-16" alt="Sig B" /></div>
                      <div className="text-xs text-slate-400 font-mono uppercase tracking-widest">Timestamp: {contract.signedAt?.toDate().toLocaleString()}</div>
                  </div>
              </div>
              <div className="mt-8 flex gap-4">
                  <Button onClick={() => window.print()} variant="secondary"><Download size={20}/> Save</Button>
                  <Button onClick={enterDashboard} className="px-8 py-3 text-lg bg-yellow-500 text-slate-900 hover:bg-yellow-400">Enter The Pact <Play size={20} fill="currentColor" /></Button>
              </div>
          </div>
      );
  }

  // 5. MAIN DASHBOARD
  const firstIncompleteIndex = tasks.findIndex(t => t.status !== 'completed');
  const rejectedTasks = [...tasks, ...jointTasks].filter(t => t.rejectionCount > 0);
  const proposedJointTasks = jointTasks.filter(t => t.status === 'proposed' && t.status !== 'cancelled');
  const activeJointTasks = jointTasks.filter(t => t.status === 'open' || t.status === 'completed');
  const lastTaskCreator = tasks.length > 0 ? tasks[tasks.length - 1].creator : null;
  const canIAdd = !lastTaskCreator || lastTaskCreator !== myRoleKey;

  return (
    <div className="min-h-screen bg-slate-100 pb-20">
      
      <Modal isOpen={isCreatingJoint} onClose={() => setIsCreatingJoint(false)} title="Propose Joint Mission">
          <div className="space-y-4">
              <input value={jointTitle} onChange={e => setJointTitle(e.target.value)} className="w-full border-2 border-slate-900 rounded-lg p-3 font-bold" placeholder="Mission Objective..." autoFocus />
              <Button onClick={proposeJointTask} disabled={!jointTitle.trim()} className="w-full"><Send size={18}/> Send Proposal</Button>
          </div>
      </Modal>

      {selectedTask && (
        <Modal isOpen={!!selectedTask} onClose={() => setSelectedTask(null)} title={selectedTask.type === 'joint' ? "Joint Mission" : (selectedTask.creator === myRoleKey ? "Submit Work" : "Review Work")}>
            <div className="space-y-6">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <h2 className="font-bold text-xl">{selectedTask.text}</h2>
                    <span className="text-xs bg-slate-200 px-2 py-1 rounded">{selectedTask.creatorName}</span>
                </div>
                {selectedTask.type === 'joint' && (
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            {['userA', 'userB'].map(u => {
                                const name = u === 'userA' ? contract.host.name : contract.guest.name;
                                const signed = selectedTask.completionSignatures?.[u];
                                return (
                                    <div key={u} className={`p-4 rounded border-2 text-center ${signed ? 'bg-green-50 border-green-500' : 'bg-slate-50'}`}>
                                        <p className="text-xs font-bold uppercase mb-2">{name}</p>
                                        {signed ? <CheckCircle className="mx-auto text-green-500"/> : <Clock className="mx-auto text-slate-300"/>}
                                    </div>
                                )
                            })}
                        </div>
                        {selectedTask.status !== 'completed' && !selectedTask.completionSignatures?.[myRoleKey] && (
                            <Button onClick={approveTask} variant="success" className="w-full py-4"><Handshake size={24} /> Sign Off</Button>
                        )}
                    </div>
                )}
                {selectedTask.type !== 'joint' && selectedTask.creator === myRoleKey && selectedTask.status === 'open' && (
                    <div className="space-y-4">
                        <textarea value={submissionNote} onChange={e => setSubmissionNote(e.target.value)} className="w-full border p-3 rounded h-32" placeholder="Notes..." />
                        <div className="flex gap-2"><input type="file" onChange={(e) => { const r = new FileReader(); r.onload = () => setSubmissionFile(r.result); r.readAsDataURL(e.target.files[0]); }} /><input value={submissionLink} onChange={e => setSubmissionLink(e.target.value)} className="flex-1 border p-2 rounded" placeholder="Link..." /></div>
                        <Button onClick={submitTask}>Turn In</Button>
                    </div>
                )}
                {selectedTask.type !== 'joint' && selectedTask.creator !== myRoleKey && selectedTask.status === 'pending' && (
                    <div className="space-y-4">
                        <div className="bg-white p-4 border rounded">
                             {selectedTask.submission?.file && <img src={selectedTask.submission.file} className="mb-4 max-h-48 rounded" />}
                             <p className="text-sm whitespace-pre-wrap">{selectedTask.submission?.note}</p>
                             {selectedTask.submission?.link && <a href={selectedTask.submission.link} target="_blank" className="text-blue-600 underline text-sm block mt-2">{selectedTask.submission.link}</a>}
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <Button onClick={() => { updateDoc(doc(db, 'artifacts', appId, 'public', 'data', 'pact_tasks', selectedTask.id), { status: 'open', rejectionCount: (selectedTask.rejectionCount||0)+1, submission: null }); setSelectedTask(null); }} variant="danger">Reject</Button>
                            <Button onClick={approveTask} variant="success">Approve</Button>
                        </div>
                    </div>
                )}
            </div>
        </Modal>
      )}

      <header className="bg-slate-900 text-white p-4 shadow-lg sticky top-0 z-20">
        <div className="max-w-2xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2"><Link2 className="text-yellow-400" /><h1 className="font-bold text-lg tracking-wider">THE PACT</h1></div>
          <div className="flex items-center gap-4">
              <div className="text-xs font-mono text-slate-400">{myProfile.name} ({amIHost ? 'Host' : 'Partner'})</div>
          </div>
        </div>
        <div className="max-w-2xl mx-auto mt-4 flex gap-2">
            {[ { id: 'chain', label: 'Chain', icon: Link2 }, { id: 'joint', label: 'Joint', icon: Handshake }, { id: 'shame', label: 'Shame', icon: Skull } ].map(tab => (
                <button key={tab.id} onClick={() => setViewTab(tab.id)} className={`flex-1 py-2 rounded-lg flex items-center justify-center gap-2 text-xs font-bold uppercase ${viewTab === tab.id ? 'bg-yellow-500 text-slate-900' : 'bg-slate-800 text-slate-400'}`}><tab.icon size={16}/>{tab.label}</button>
            ))}
        </div>
      </header>

      <main className="max-w-2xl mx-auto p-4 space-y-6">
          {viewTab === 'shame' && rejectedTasks.map(t => <div key={t.id} className="bg-white p-4 border-l-4 border-red-500 flex justify-between"><span>{t.text}</span><span className="font-bold text-red-500">{t.rejectionCount}x</span></div>)}
          
          {viewTab === 'joint' && (
              <div className="space-y-6">
                  <Button onClick={() => setIsCreatingJoint(true)} className="w-full bg-purple-900 hover:bg-purple-800">Propose Mission</Button>
                  {proposedJointTasks.map(t => (
                      <Card key={t.id} className="p-4 border-l-4 border-purple-400">
                          <div className="flex justify-between mb-2"><h3 className="font-bold">{t.text}</h3><span className="text-xs bg-purple-100 px-2 py-1 rounded">PROPOSAL</span></div>
                          {!t.approvals[myRoleKey] ? <Button size="sm" onClick={() => signJointProposal(t)}>Authorize</Button> : <span className="text-xs text-slate-400">Waiting for partner...</span>}
                      </Card>
                  ))}
                  {activeJointTasks.map(t => (
                      <Card key={t.id} className="p-4 flex justify-between items-center cursor-pointer hover:bg-slate-50" onClick={() => setSelectedTask(t)}>
                          <div><h3 className="font-bold">{t.text}</h3><ProgressBar progress={50} /></div>
                          <Handshake size={24} className={t.status === 'completed' ? 'text-green-500' : 'text-blue-500'} />
                      </Card>
                  ))}
              </div>
          )}

          {viewTab === 'chain' && (
              <>
                <div className="relative space-y-4">
                    <div className="absolute left-8 top-0 bottom-0 w-1 bg-slate-300 -z-0"></div>
                    {tasks.map((t, idx) => {
                        const isNext = idx === firstIncompleteIndex;
                        const isLocked = !isNext && t.status !== 'completed';
                        const isMyTask = t.creator === myRoleKey;
                        let icon = isLocked ? <Lock size={16}/> : (t.status === 'completed' ? <CheckCircle size={20}/> : (isMyTask ? <FileText size={20}/> : <Eye size={20}/>));
                        let btnClass = t.status === 'completed' ? 'bg-green-500 text-white' : (isLocked ? 'bg-slate-200' : 'bg-white border-2 border-slate-900');
                        
                        return (
                            <div key={t.id} className={`relative flex gap-4 ${isLocked ? 'opacity-50' : ''}`}>
                                <div className="w-16 flex-shrink-0 flex justify-center z-10 pt-2">
                                    <button onClick={() => { if(!isLocked && t.status !== 'completed') setSelectedTask(t) }} className={`w-12 h-12 rounded-full flex items-center justify-center ${btnClass}`}>{icon}</button>
                                </div>
                                <Card className="flex-1 p-4">
                                    <span className="text-xs font-bold uppercase bg-slate-100 px-2 py-1 rounded">{t.creatorName}</span>
                                    <p className={`font-medium mt-1 ${t.status === 'completed' ? 'line-through text-slate-400' : ''}`}>{t.text}</p>
                                </Card>
                            </div>
                        )
                    })}
                </div>
                <div className="sticky bottom-4 z-20">
                    <Card className="bg-slate-900 border-slate-900 text-white p-2">
                        {canIAdd ? (
                            <form onSubmit={addSoloTask} className="flex gap-2">
                                <input value={newTaskText} onChange={e => setNewTaskText(e.target.value)} placeholder="Add next link..." className="flex-1 bg-slate-800 border-none rounded-lg px-4 py-3 text-white outline-none" />
                                <Button type="submit" className="bg-yellow-500 text-slate-900"><Link2/></Button>
                            </form>
                        ) : (
                            <div className="p-3 text-center text-slate-400 text-sm flex items-center justify-center gap-2"><Lock size={16} /><span>Wait for your friend.</span></div>
                        )}
                    </Card>
                </div>
              </>
          )}

          <Card className="p-4 bg-yellow-50 border-yellow-200">
            <h3 className="font-bold text-yellow-800 mb-2 flex gap-2"><Scroll size={16}/> The Wall</h3>
            <textarea value={notes} onChange={(e) => { setNotes(e.target.value); if(notesTimeoutRef.current) clearTimeout(notesTimeoutRef.current); notesTimeoutRef.current = setTimeout(() => updateDoc(doc(db, 'artifacts', appId, 'public', 'data', 'pact_meta', 'contract'), { notes: e.target.value }), 1000); }} className="w-full h-24 bg-transparent border-none resize-none font-handwriting focus:ring-0" />
          </Card>
          <div className="text-center"><button onClick={() => { localStorage.removeItem(`pact_profile_${appId}`); window.location.reload(); }} className="text-xs text-slate-400 underline">Switch Profile</button></div>
      </main>
    </div>
  );
}